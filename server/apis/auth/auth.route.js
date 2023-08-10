import express from "express";
import { login, logout, refresh, register } from "../auth/auth.controller.js";
import { verifyToken } from "../../middlewares/auth.middlewares.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", verifyToken, logout);
router.get("/refresh", refresh);

export default router;
