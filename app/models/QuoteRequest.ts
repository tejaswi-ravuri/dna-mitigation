// app/models/QuoteRequest.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuoteRequest extends Document {
  attorneyName: string;
  lawFirm: string;
  email: string;
  phone?: string;
  caseReference?: string;
  notes?: string;
  packageId: string;
  confirmationCode: string;
  status: "pending" | "deposit_requested" | "paid" | "completed";
  paymentLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteRequestSchema = new Schema<IQuoteRequest>(
  {
    attorneyName: { type: String, required: true, trim: true },
    lawFirm: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: null },
    caseReference: { type: String, default: null },
    notes: { type: String, default: null },
    packageId: { type: String, required: true },
    confirmationCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["pending", "deposit_requested", "paid", "completed"],
      default: "pending",
    },
    paymentLink: { type: String, default: null },
  },
  { timestamps: true },
);

const QuoteRequest: Model<IQuoteRequest> =
  mongoose.models.QuoteRequest ||
  mongoose.model<IQuoteRequest>("QuoteRequest", QuoteRequestSchema);

export default QuoteRequest;
