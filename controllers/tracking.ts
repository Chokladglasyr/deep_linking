
import { Request } from "express";
import { Tracking } from "../models/checkIpInterface";

export const trackUser = async (req: Request) => {
  try {
    await Tracking.create({ ip: req.ip, influencer: "sara" });
  } catch (error) {
    console.error(`Error when saving ip-adress: ${error}`);
  }
};
