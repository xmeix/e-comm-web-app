import express from "express";
import { login, logout, refresh, register } from "./auth.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh", refresh);

export default router;
