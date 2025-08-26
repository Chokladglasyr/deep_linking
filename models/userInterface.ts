import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    influencer: string;
    source: string;

}
const userSchema: Schema = new Schema ({
    name: {type: String, required:true},
    email: {type: String, required: true},
    password: {type: String},
    influencer: {type: String},

})
export const User = mongoose.model<IUser>("User", userSchema)