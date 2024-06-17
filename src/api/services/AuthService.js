import bcrypt from "bcryptjs";

import User from "../../models/UserModel.js";

class AuthService {
  async registration(email, password, name, height, weight) {
    // check emil
    const checkEmail = await User.findOne({email});
    if(checkEmail) {
      return `User with email: ${email}, has already`;
    }

    const hashPassword = await bcrypt.hash(password, 3);

    await User.create({email, password: hashPassword, name, height, weight});

  }

  async login(email, password) {
    const user = await User.findOne({email});
    if(!user) {
      return `User with this email wasn\'t found`;
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    if(!isPassEquals) {
      return `Invalid password`;
    }

  }

}

export default new AuthService();