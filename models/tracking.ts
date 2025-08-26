import mongoose, { model, Schema } from "mongoose";

export interface ITracking extends Document {
    ip: string;
    influencer: string;
    source: string;
    createdAt: Date;

}

const trackingSchema = new Schema({
  ip: { type: String, required: true },
  influencer: { type: String, required: true },
  source: { type: String },
  createdAt: {type: Date, default: Date.now, expires: 900}
});

export const Tracking = mongoose.model<ITracking>("Tracking", trackingSchema)
