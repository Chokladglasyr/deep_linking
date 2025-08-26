import { Tracking } from "../models/tracking";
import { Request } from "express";

export const trackUser = async (req: Request) => {
  try {
    await Tracking.create({ ip: req.ip, influencer: "sara" });
  } catch (error) {
    console.error(`Error when saving ip-adress: ${error}`);
  }
};
