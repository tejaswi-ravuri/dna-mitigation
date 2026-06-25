// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  sendContactClientConfirmation,
  sendContactAdminAlert,
} from "@/lib/mailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, firm, message } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, message" },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    if (
      !PHONE_REGEX.test(phone.trim()) ||
      phone.replace(/\D/g, "").length < 10
    ) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 },
      );
    }

    const contactDetails = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      firm: firm?.trim() || undefined,
      message: message.trim(),
    };

    // Send both emails concurrently — don't block response on email failure
    await Promise.all([
      sendContactClientConfirmation(contactDetails),
      sendContactAdminAlert(contactDetails),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent. We'll be in touch within 24 business hours.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 },
    );
  }
}
