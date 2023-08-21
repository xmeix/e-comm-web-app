import { errorHandler } from "./../../middlewares/auth.middlewares.js";
import User from "./user.model.js";

// @desc    Update profile picture
// @route   POST /api/user/:id/image
// @access  Private
export const updateProfileImage = async (req, res, next) => {
  try {
    const imgPath = `http://localhost:3001/${req.file.path}`;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
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
