import { Request, Response } from "express";
import { User } from "../models/userInterface";
import { Tracking } from "../models/tracking";

export const createUser = async (req: Request, res: Response) => {
  try {
    const clientIp = req.ip;
    console.log(clientIp)
    const existsTracking = await Tracking.findOne({ ip: clientIp });
    if (!existsTracking) {
      const newTracking = new Tracking({
        ip: clientIp,
        source: req.headers.referer || "direct",
      });
      await newTracking.save();
    } else {
      const { name, email, password } = req.body;
      const existsUser = await User.findOne({ email: email });
      if (existsUser) {
        res.status(400).json({ message: "User exists" });
        return;
      }
      const newUser = new User({
        name,
        email,
        password,
        influencer: existsTracking.influencer,
      });
      await newUser.save();
      res.status(201).json({
        message: "New user registered",
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          influencer: newUser.influencer,
          source: newUser.source,
        },
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to register: ", err);
    }
  }
};

export const storeNewIP = async (req: Request, res: Response) => {
  try {
    const { clientIp } = req.params;
    const existsClient = await Tracking.findOne({ ip: clientIp });
    const { ip, influencer, source } = req.body; //HÄMTAS FRÅN VART?
    if (!existsClient) {
      const newClient = new Tracking({ ip, influencer, source });
      await newClient.save();
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to save ip: ", err);
    }
  }
};
