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
exports.trackUser = void 0;
const tracking_1 = require("../models/tracking");
const trackUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield tracking_1.Tracking.create({ ip: req.ip, influencer: "sara" });
        //kolla ifall redan existerar
    }
    catch (error) {
        console.error(`Error when saving ip-adress: ${error}`);
    }
});
exports.trackUser = trackUser;
