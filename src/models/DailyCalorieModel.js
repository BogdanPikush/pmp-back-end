import mongoose from "mongoose";

const DailyCalorieSchema  = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: Date, default: Date.now, required: true },
  calories: { type: Number, required: true }
});

const DailyCalorie = mongoose.model("DailyCalorie", DailyCalorieSchema );

export default DailyCalorie;