import mongoose, { Document, Schema } from "mongoose";

export interface IClientIp extends Document {
    _id: string;
    refId: string;

}
const clientIpSchema: Schema = new Schema ({
    _id: {type: String},
    refId: {type: String},

})
export const ClientIp = mongoose.model<IClientIp>("User", clientIpSchema)