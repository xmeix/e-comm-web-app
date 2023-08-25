import bcrypt from "bcrypt";
import {
  errorHandler,
  generateJWT,
} from "../../middlewares/auth.middlewares.js";
import User from "./../user/user.model.js";
import {
  RegisterationValidation,
  LoginValidation,
} from "../../validation/user.validation.js";
import CustomError from "../../utils/CustomError.js";
import jwt from "jsonwebtoken";
import { getGoogleToken, getGoogleUser } from "../../utils/googleAuthURL.js";
// @desc    Auth user, save refresh token in cookie , generate and send access token
// @route   POST /api/auth/google
// @access  Public
export const loginWithGoogle = async (req, res, next) => {
  const code = req.query.code;
  const { id_token, access_token } = await getGoogleToken({ code });
  const googleUser = await getGoogleUser({ id_token, access_token });

  try {
    //
    if (!googleUser.verified_email) {
      throw new CustomError(403, "Google account is not verified!");
    }
    // upsert the user (find user and change email , if it doesnt exist than create it )
    const user = await User.findOneAndUpdate(
      {
        email: googleUser.email,
      },
      {
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
        isAdmin: false,
      },
      {
        upsert: true,
        new: true,
      }
    );

    // generate accessToken
    const accessToken = generateJWT(
      user,
      "5m",
      process.env.ACCESS_TOKEN_SECRET
    );

    // auth
    res.set("Authorization", `Bearer ${accessToken}`);

    const refreshToken = generateJWT(
      user,
      "7d" /*7days*/,
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({ token: accessToken, user, message: "Logged In successfully!" });
  } catch (err) {
    next(errorHandler(res, err));
  }
};

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
      "5m",
      process.env.ACCESS_TOKEN_SECRET
    );

    // res.set("Authorization", `Bearer ${accessToken}`);
    const refreshToken = generateJWT(
      user,
      "7d" /*7days*/,
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 5 * 60 * 1000,
    });

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    delete user.password;

    res.status(200).json({ user, message: "Logged In successfully!" });
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
    res.cookie("access_token", null, { expires: new Date(0), httpOnly: true });
    res.redirect("http://127.0.0.1:5173/login");
    res.status(200).json({ message: "user logged out successfully" });
  } catch (error) {
    next(errorHandler(res, error));
  }
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res, next) => {
  try {
    let { name, email, password, isAdmin } = req.body;

    const dataToValidate = {
      name,
      email,

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
      email,
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
