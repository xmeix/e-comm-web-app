import express from "express";
import { login, logout, refresh, register } from "../auth/auth.controller.js";
import { verifyToken } from "../../middlewares/auth.middlewares.js";
// import passport from "passport";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh", refresh);

// // Google Authentication routes
// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
//     res.redirect("/dashboard");
//   }
// );

export default router;
