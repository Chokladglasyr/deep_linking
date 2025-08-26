
import { Request } from "express";
import { Tracking } from "../models/tracking";

export const trackUser = async (req: Request) => {
  try {
    await Tracking.create({ ip: req.ip, influencer: "sara" });
    //kolla ifall redan existerar
  } catch (error) {
    console.error(`Error when saving ip-adress: ${error}`);
  }
};

