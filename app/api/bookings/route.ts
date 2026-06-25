// app/api/bookings/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/app/models/Booking";
import { sendClientConfirmation, sendAdminNotification } from "@/lib/mailer";

// ── GET /api/bookings?date=May+14,+2026
// Returns all booked time slots for a given date so the frontend can disable them.
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const date = req.nextUrl.searchParams.get("date");
    if (!date) return NextResponse.json({ bookedSlots: [] });

    const bookings = await Booking.find(
      { date, status: { $ne: "cancelled" } },
      { time: 1, _id: 0 },
    ).lean();

    return NextResponse.json({ bookedSlots: bookings.map((b) => b.time) });
  } catch (err) {
    console.error("[GET /api/bookings]", err);
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 500 },
    );
  }
}

// ── POST /api/bookings
// Creates a new booking, saves to MongoDB, and fires both emails.
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, firm, email, phone, caseType, notes, date, time } = body;

    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, date, time" },
        { status: 400 },
      );
    }

    // Race-condition guard before the unique-index fires
    const existing = await Booking.findOne({
      date,
      time,
      status: { $ne: "cancelled" },
    });
    if (existing) {
      return NextResponse.json(
        { error: "This time slot has just been booked. Please select another." },
        { status: 409 },
      );
    }

    const booking = await Booking.create({
      name,
      firm,
      email,
      phone,
      caseType,
      notes,
      date,
      time,
    });

    const emailPayload = { name, firm, email, phone, caseType, notes, date, time };

    // Fire emails concurrently — don't block response on email failure
    Promise.all([
      sendClientConfirmation(emailPayload),
      sendAdminNotification(emailPayload),
    ]).catch((err) => console.error("[Booking email error]", err));

    return NextResponse.json(
      { success: true, bookingId: booking._id },
      { status: 201 },
    );
  } catch (err: any) {
    if (err.code === 11000) {
      return NextResponse.json(
        { error: "This time slot has just been booked. Please select another." },
        { status: 409 },
      );
    }
    console.error("[POST /api/bookings]", err);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 },
    );
  }
}
