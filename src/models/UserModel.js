import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  height: { type: Number },
  weight: { type: Number },
});

const User = mongoose.model("User", UserSchema);

export default User;