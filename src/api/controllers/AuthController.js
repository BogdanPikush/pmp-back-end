import AuthService from "../services/AuthService.js";

class AuthController {

  async registration (req, res) {
    try {
      const {email, password, name, height, weight} = req.body;

      const check_req = await AuthService.registration(email, password, name, height, weight);

      if(check_req) {
        return res.status(405).json({message: check_req});
      }

      return res.status(200).json({message: 'User is complete registration', email});
    } catch (e) {
      return res.status(500).json({message: e.message});
    }
  }

  async login (req, res) {
    try {
      const {email, password} = req.body;

      const userData = await AuthService.login(email, password);

      if(userData == `User with this email wasn\'t found`) {
        return res.status(400).json({message: userData});
      }

      if(userData == `Invalid password`) {
        return res.status(400).json({message: userData});
      }

      return res.status(200).json({message: "login is complete", email});
    } catch (e) {
      return res.status(500).json({message: e.message});
    }
  }
}

export default new AuthController();