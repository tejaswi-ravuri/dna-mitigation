import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import QuoteRequest from "@/app/models/QuoteRequest";
import { generateConfirmationCode } from "@/lib/codes";
import { PACKAGES, PackageId } from "@/lib/data/packages";
import { sendQuoteRequestClientEmail, sendQuoteAdminAlert } from "@/lib/mailer";

type QuoteRequestBody = {
  attorneyName: string;
  lawFirm: string;
  email: string;
  phone?: string;
  caseReference?: string;
  notes?: string;
  packageId: PackageId;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: QuoteRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const {
    attorneyName,
    lawFirm,
    email,
    phone,
    caseReference,
    notes,
    packageId,
  } = body;

  if (
    !attorneyName?.trim() ||
    !lawFirm?.trim() ||
    !email?.trim() ||
    !packageId
  ) {
    return NextResponse.json(
      { error: "Attorney name, law firm, email, and package are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const pkg = PACKAGES[packageId];
  if (!pkg) {
    return NextResponse.json(
      { error: "Invalid package selected." },
      { status: 400 },
    );
  }

  // Check SMTP config early to give a clear error
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.error("Missing SMTP environment configuration.");
    return NextResponse.json(
      { error: "Server email is not configured. Please contact us directly." },
      { status: 500 },
    );
  }

  try {
    await connectDB();

    // Generate a unique confirmation code and persist the request
    const confirmationCode = await generateConfirmationCode(packageId);

    await QuoteRequest.create({
      attorneyName: attorneyName.trim(),
      lawFirm: lawFirm.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      caseReference: caseReference?.trim() || null,
      notes: notes?.trim() || null,
      packageId,
      confirmationCode,
    });

    // Build the quote page URL — clients enter their code here
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.dnamitigation.com";
    const quotePageUrl = `${baseUrl}/pay-deposit`;

    // Fire both emails concurrently
    await Promise.all([
      sendQuoteRequestClientEmail({
        to: email.trim(),
        attorneyName: attorneyName.trim(),
        lawFirm: lawFirm.trim(),
        confirmationCode,
        packageName: pkg.name,
        quotePageUrl,
      }),
      sendQuoteAdminAlert({
        attorneyName: attorneyName.trim(),
        lawFirm: lawFirm.trim(),
        email: email.trim(),
        phone: phone?.trim(),
        packageName: pkg.name,
        packageId,
        confirmationCode,
        caseReference: caseReference?.trim(),
        notes: notes?.trim(),
      }),
    ]);

    return NextResponse.json({ confirmationCode });
  } catch (err) {
    console.error("[POST /api/quote-request]", err);
    return NextResponse.json(
      {
        error:
          "We couldn't process your request right now. Please try again shortly.",
      },
      { status: 502 },
    );
  }
}
