import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  displayName: string;
  username: string;
  email: string;
  img: string;
  hashedPassword: string;
}

const UserSchema: Schema = new Schema(
  {
    displayName: { type: String, required: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    img: { type: String },
    hashedPassword: { type: String, require: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
