import express from "express";
import { verifyCookieToken } from "../../middlewares/auth.middlewares.js";
import {
  addAdditionnalUserInfo,
  changePassword,
  updateProfileImage,
} from "./user.controller.js";
import { upload } from "../../utils/uploadVars.js";
const router = express.Router();

router.post(
  "/image",
  verifyCookieToken,
  upload.single("image"),
  updateProfileImage
);

router.patch("/addInfo", verifyCookieToken, addAdditionnalUserInfo);
router.patch("/changepassword", verifyCookieToken, changePassword);

export default router;
