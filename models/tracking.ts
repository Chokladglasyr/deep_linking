import { model, Schema } from "mongoose";

const trackingSchema = new Schema({
  ip: { type: String, required: true },
  influencer: { type: String, required: true },
  source: { type: String },
  createdAt: {type: Date, default: Date.now, expires: 900}
});

export const Tracking = model<Schema<typeof trackingSchema>>(
  "Tracking",
  trackingSchema
);
