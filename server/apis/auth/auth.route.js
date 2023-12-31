import express from "express";
import {
  login,
  loginWithGoogle,
  logout,
  register,
} from "../auth/auth.controller.js";
import { getGoogleAuthURL } from "../../utils/googleAuthURL.js";
// import passport from "passport";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
// google authentication
router.post("/google/url", (req, res) => {
  return res.send(getGoogleAuthURL());
});

router.get("/oauth/google", loginWithGoogle);

export default router;
