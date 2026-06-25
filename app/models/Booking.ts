// models/Booking.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  name: string;
  firm: string;
  email: string;
  phone: string;
  caseType: string;
  notes: string;
  date: string; // e.g. "May 14, 2026"
  time: string; // e.g. "10:00 AM PT"
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true, trim: true },
    firm: { type: String, trim: true, default: "" },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    caseType: { type: String, default: "" },
    notes: { type: String, default: "" },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

// Prevent duplicate slot bookings
BookingSchema.index({ date: 1, time: 1 }, { unique: true });

const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
