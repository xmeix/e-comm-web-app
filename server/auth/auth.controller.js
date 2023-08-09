import bcrypt from "bcrypt";
import { errorHandler, generateJWT } from "../middlewares/auth.middlewares.js";
import User from "./../user/user.model.js";
import {
  RegisterationValidation,
  LoginValidation,
} from "./../validation/user.validation.js";
import CustomError from "../utils/CustomError.js";

// @desc    Auth user, save refresh token in cookie , generate and send access token
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    const dataToValidate = {
      email,
      password,
    };

    const { error, value } = LoginValidation.validate(dataToValidate);

    if (error) {
      // console.error("401::" + error.details[0].message);
      throw new CustomError(400, error.details[0].message); // Fixed the error variable
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new CustomError(401, "Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new CustomError(401, "Invalid credentials");

    // generate accessToken
    const accessToken = generateJWT(
      user,
      "15m" /*15min*/,
      process.env.ACCESS_TOKEN_SECRET
    );

    // res.set("Authorization", `Bearer ${accessToken}`);

    const refreshToken = generateJWT(
      user,
      "364d" /*1year*/,
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 364 * 24 * 60 * 60 * 1000,
    });

    delete user.password;

    res
      .status(200)
      .json({ token: accessToken, user, message: "Logged In successfully!" });
  } catch (err) {
    next(errorHandler(res, err));
  }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
export const logout = async (req, res, next) => {
  try {
    res.cookie("refresh_token", null, { expires: new Date(0), httpOnly: true });
    res.status(200).json({ message: "user logged out successfully" });
  } catch (error) {
    next(errorHandler(res, err));
  }
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res, next) => {
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
      throw new CustomError(400, error.details[0].message); // Fixed the error variable
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new CustomError(409, "User already exists"); // Removed the object notation for error message
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

    console.log(userWithoutPassword._doc);

    res.status(200).json({
      user: userWithoutPassword._doc,
      message: "Signed Up successfully",
    });
  } catch (error) {
    next(errorHandler(res, error));
  }
};
