import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import QuoteRequest from "@/app/models/QuoteRequest";
import { getPackage } from "@/lib/data/packages";
import { notifyAdminOfDepositClick } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { requestId } = await req.json();

    if (!requestId) {
      return NextResponse.json(
        { error: "Missing request id." },
        { status: 400 },
      );
    }

    const quoteRequest = await QuoteRequest.findByIdAndUpdate(
      requestId,
      {
        status: "deposit_requested",
      },
      {
        new: true,
      },
    );

    if (!quoteRequest) {
      return NextResponse.json(
        {
          error: "Quote request not found.",
        },
        {
          status: 404,
        },
      );
    }

    if (quoteRequest.paymentLink) {
      return NextResponse.json({
        success: true,
        redirectUrl: quoteRequest.paymentLink,
      });
    }

    const pkg = getPackage(quoteRequest.packageId);
    await notifyAdminOfDepositClick({
      attorneyName: quoteRequest.attorneyName,
      lawFirm: quoteRequest.lawFirm,
      packageName: pkg?.name || quoteRequest.packageId,
      confirmationCode: quoteRequest.confirmationCode,
    });

    return NextResponse.json({ success: true, redirectUrl: null });
  } catch (err) {
    console.error("deposit error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
