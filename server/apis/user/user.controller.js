import CustomError from "../../utils/CustomError.js";
import { PasswordValidation } from "../../validation/user.validation.js";
import { errorHandler } from "./../../middlewares/auth.middlewares.js";
import User from "./user.model.js";
import bcrypt from "bcrypt";

// @desc    Update profile picture
// @route   POST /api/user/:id/image
// @access  Private
export const updateProfileImage = async (req, res, next) => {
  try {
    const imgPath = `http://localhost:3001/${req.file.path}`;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: { profileImage: imgPath, ...req.body },
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(errorHandler(res, error));
  }
};

export const addAdditionnalUserInfo = async (req, res, next) => {
  try {
    const id = req.user.id;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(errorHandler(res, error));
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const id = req.user.id;
    const newPassword = req.body.password;

    // gotta validate it
    const { error, value } = PasswordValidation.validate({
      password: newPassword,
    });

    if (error) {
      throw new CustomError(400, "Password format isnt secure");
    }

    // gotta hash it
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(newPassword, salt);

    const updatedUser = await User.findByIdAndUpdate(id, {
      password: passwordHash,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(errorHandler(res, error));
  }
};

export const getUser = async (req, res, next) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    next(errorHandler(res, error));
  }
};
