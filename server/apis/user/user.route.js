import express from "express";
import { verifyToken } from "../../middlewares/auth.middlewares.js";
import {
  addAdditionnalUserInfo,
  changePassword,
  updateProfileImage,
} from "./user.controller.js";
import { upload } from "../../utils/uploadVars.js";
const router = express.Router();

router.post(
  "/:id/image",
  verifyToken,
  upload.single("image"),
  updateProfileImage
);

router.patch("/addInfo", verifyToken, addAdditionnalUserInfo);
router.patch("/changepassword", verifyToken, changePassword);

export default router;
