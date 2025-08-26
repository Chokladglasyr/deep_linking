import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    refId: string;
    source: string;

}
const userSchema: Schema = new Schema ({
    _id: {type: String},
    name: {type: String, required:true},
    email: {type: String, required: true},
    password: {type: String},
    refId: {type: String},

})
export const User = mongoose.model<IUser>("User", userSchema)