import { Request } from "express";
import { Tracking } from "../models/tracking";

export const trackUser = async (req: Request) => {
  try {
    const ip = req.ip;
    const influencer = req.query.influencer;
    const source = req.query.source;
    const existingTracking = await Tracking.findOne({ ip });

    if (!existingTracking) {
      await Tracking.create({ ip, influencer, source });
    } else {
      if (influencer && influencer !== existingTracking.influencer) {
        // im lying here
        existingTracking.influencer = influencer as string;
      }
      if (source && source !== existingTracking.source) {
        existingTracking.source = source as string;
      }
      await existingTracking.save();
    }
  } catch (error) {
    console.error(`Error when saving ip-address: ${error}`);
  }
};
