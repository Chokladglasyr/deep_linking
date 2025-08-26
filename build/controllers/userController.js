"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeNewIP = exports.createUser = void 0;
const userInterface_1 = require("../models/userInterface");
const tracking_1 = require("../models/tracking");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hej");
        const clientIp = req.ip;
        const existsTracking = yield tracking_1.Tracking.findOne({ ip: clientIp });
        if (!existsTracking) {
            const newTracking = new tracking_1.Tracking({
                ip: clientIp,
                source: req.headers.referer || "direct",
            });
            yield newTracking.save();
        }
        else {
            const { name, email, password } = req.body;
            const existsUser = yield userInterface_1.User.findOne({ email: email });
            if (existsUser) {
                res.status(400).json({ message: "User exists" });
                return;
            }
            const newUser = new userInterface_1.User({
                name,
                email,
                password,
                influencer: existsTracking.influencer,
            });
            yield newUser.save();
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
    }
    catch (err) {
        if (err instanceof Error) {
            console.error("Failed to register: ", err);
        }
    }
});
exports.createUser = createUser;
const storeNewIP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientIp } = req.params;
        const existsClient = yield tracking_1.Tracking.findOne({ ip: clientIp });
        const { ip, influencer, source } = req.body; //HÄMTAS FRÅN VART?
        if (!existsClient) {
            const newClient = new tracking_1.Tracking({ ip, influencer, source });
            yield newClient.save();
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error("Failed to save ip: ", err);
        }
    }
});
exports.storeNewIP = storeNewIP;
