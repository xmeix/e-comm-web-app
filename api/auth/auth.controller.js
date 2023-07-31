import bcrypt from "bcrypt";
import { generateJWT } from "../middlewares/auth.middlewares.js";
import User from "./../user/user.model.js";
import jwt from "jsonwebtoken";
 
/** LOGIN USER */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    const jwtToken = generateJWT(
      user,
      "1m" /*15min apres*/,
      process.env.ACCESS_TOKEN_SECRET
    );
    res.set("Authorization", `Bearer ${jwtToken}`);

    const refreshToken = generateJWT(
      user,
      "364d",
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, // should be true in production https
      sameSite: "None", //cross-site cookie
      maxAge: 364 * 24 * 60 * 60 * 1000,
    });
    delete user.password;
 
    res.status(200).json({ token: jwtToken, user, msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
