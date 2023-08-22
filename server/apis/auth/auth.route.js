import express from "express";
import { login, loginWithGoogle, logout, refresh, register } from "../auth/auth.controller.js";
import { verifyToken } from "../../middlewares/auth.middlewares.js";
import { addAdditionnalUserInfo } from "../user/user.controller.js";
import { getGoogleAuthURL } from "../../utils/googleAuthURL.js";
// import passport from "passport";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh", refresh);
router.get("/google/url", loginWithGoogle);

export default router;
