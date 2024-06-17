import DailyCalorie from "../../models/DailyCalorieModel.js";
import User from "../../models/UserModel.js";

class CalorieController {

  async saveCalories (req, res) {
    try {
      const { email, day, calories } = req.body;

      const user = await User.findOne({email: email});

      const dailyCalorie = new DailyCalorie({
        user: user._id,
        day: new Date(day),
        calories: calories
      });
  
      await dailyCalorie.save();

      return res.status(200).json({dailyCalorie});
    } catch (e) {
      return res.status(500).json({message: e.message});
    }
  }

  async calories (req, res) {
    try {
      const { email, day } = req.query; 

      const startDate = new Date(day);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(day);
      endDate.setHours(23, 59, 59, 999);

      const user = await User.findOne({email: email});

      const dailyCalories = await DailyCalorie.find({
        user: user._id,
        day: { $gte: startDate, $lte: endDate }
      }).select('calories day').sort('day');

      return res.status(200).json({dailyCalories});
    } catch (e) {
      return res.status(500).json({message: e.message});
    }
  }
}

export default new CalorieController();