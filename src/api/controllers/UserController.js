import DailyCalorie from "../../models/DailyCalorieModel.js";
import User from "../../models/UserModel.js";

class UserController {

  async getUser(req, res) {
    try {
      const { email } = req.params;
      console.log(email);

      // Fetch user data based on email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user); // Return user data as JSON
    } catch (error) {
      console.error('Error fetching user data:', error);
      return res.status(500).json({ message: "Failed to fetch user data" });
    }
  }


}

export default new UserController();