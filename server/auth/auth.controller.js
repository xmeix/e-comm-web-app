import bcrypt from "bcrypt";
import { errorHandler, generateJWT } from "../middlewares/auth.middlewares.js";
import User from "./../user/user.model.js";
import jwt from "jsonwebtoken";
import {
  RegisterationValidation,
  LoginValidation,
} from "./../validation/user.validation.js";

// /** LOGIN USER */
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    const dataToValidate = {
      email,
      password,
    };

    const { error, value } = LoginValidation.validate(dataToValidate);

    if (error) {
      console.error("401::", error.details[0].message);
      throw new Error("401::", error.details[0].message); // Fixed the error variable
    } else {
      console.log("Validated Data:", value);
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    // generate accessToken
    const accessToken = generateJWT(
      user,
      "1m" /*15min apres*/,
      process.env.ACCESS_TOKEN_SECRET
    );

    res.set("Authorization", `Bearer ${accessToken}`);

    const refreshToken = generateJWT(
      user,
      "364d",
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 364 * 24 * 60 * 60 * 1000,
    });

    delete user.password;

    res
      .status(200)
      .json({ token: accessToken, user, msg: "Logged In successfully!" });
  } catch (err) {
    next(errorHandler(err));
  }
};

export const register = async (req, res) => {
  try {
    let { name, phoneNumber, email, address, password, isAdmin } = req.body;

    const dataToValidate = {
      name,
      phoneNumber,
      email,
      address: {
        street: address.street,
        city: address.city,
        zipCode: address.zipCode,
      },
      password,
    };

    const { error, value } = RegisterationValidation.validate(dataToValidate);

    if (error) {
      throw new Error("401::", error.details[0].message); // Fixed the error variable
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists"); // Removed the object notation for error message
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      phoneNumber,
      email,
      address,
      password: passwordHash,
      isAdmin,
    });

    const savedUser = await newUser.save();
    const { password: savedPassword, ...userWithoutPassword } = savedUser;

    res.status(200).json({
      user: userWithoutPassword._doc,
      message: "Signed Up successfully",
    });
  } catch (error) {
    next(errorHandler(error));
  }
};
