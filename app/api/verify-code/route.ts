// app/api/verify-code/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import QuoteRequest from "@/app/models/QuoteRequest";
import { getPackage } from "@/lib/data/packages";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json(
        { error: "Enter your confirmation code." },
        { status: 400 },
      );
    }

    await connectDB();

    const quoteRequest = await QuoteRequest.findOne({
      confirmationCode: code.trim().toUpperCase(),
    });

    if (!quoteRequest) {
      return NextResponse.json(
        { error: "We couldn't find that code. Double-check it and try again." },
        { status: 404 },
      );
    }

    const pkg = getPackage(quoteRequest.packageId);
    if (!pkg) {
      return NextResponse.json(
        {
          error:
            "This quote's package is no longer available. Please contact us.",
        },
        { status: 410 },
      );
    }

    return NextResponse.json({
      success: true,
      requestId: quoteRequest._id,
      status: quoteRequest.status,
      attorneyName: quoteRequest.attorneyName,
      lawFirm: quoteRequest.lawFirm,
      package: {
        name: pkg.name,
        interviews: pkg.interviews,
        totalFlat: pkg.totalFlat,
        depositAmount: pkg.depositAmount,
      },
    });
  } catch (err) {
    console.error("[POST /api/verify-code]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
