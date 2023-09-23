import express from "express";
import {
  addCategorie,
  deleteCategorie,
  getAllCategories,
  updateCategorie,
} from "./categorie.controller.js";
import { verifyCookieToken, verifyCookieTokenAndAdmin } from "../../middlewares/auth.middlewares.js";
import { upload } from "../../utils/uploadVars.js";

const router = express.Router();

// this is user route
router.get("/", getAllCategories);

// these are admins routes
router.post(
  "/",
  verifyCookieToken,
  upload.array("image"),
  addCategorie
);
router.patch("/:id", verifyCookieTokenAndAdmin, updateCategorie);
router.delete("/:id", verifyCookieTokenAndAdmin, deleteCategorie);

export default router;
