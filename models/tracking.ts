import { InferSchemaType, model, Schema } from "mongoose";

const trackingSchema = new Schema({
  ip: { type: String, required: true },
  influencer: { type: String },
  source: { type: String },
  createdAt: { type: Date, default: Date.now, expires: 900 },
});

export const Tracking = model<InferSchemaType<typeof trackingSchema>>(
  "Tracking",
  trackingSchema
);
