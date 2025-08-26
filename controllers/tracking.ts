import { Request } from "express";
import { Tracking } from "../models/tracking";

export const trackUser = async (req: Request) => {
  try {
    const influencer = (req.query.influencer as string) || "direct";
    const ip = req.ip;
    const source = req.headers.referer || "direct";
    console.log("Tracking visit from IP:", req.ip, "Influencer:", influencer);

    let existingTracking = await Tracking.findOne({ ip });

    if (!existingTracking) {
      existingTracking = await Tracking.create({
        ip,
        influencer,
        source,
      });
      console.log("Created new tracking entry:", existingTracking);
    } else {
      console.log("Existing user found:", existingTracking);

      if (influencer && influencer !== "direct") {
        existingTracking.influencer = influencer;
        await existingTracking.save();
        console.log("Updated influencer for existing tracking");
      }
    }
    return existingTracking;
  } catch (error) {
    console.error(`Error when saving ip-address: ${error}`);
  }
};
// await Tracking.create({
//   ip: req.ip,
//   influencer: influencer,
//   source: req.headers.referer || "direct",
