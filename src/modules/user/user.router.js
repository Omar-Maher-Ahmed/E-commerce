import { Router } from "express";
import { register ,login ,profile ,update ,deleted } from "./controller/user.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.middleware.js";
import { registerValidation, loginValidation } from "./user.validation.js";

const router = Router();

router.post("/register",registerValidation ,register);
router.post("/login",loginValidation ,login);
router.get("/profile",authMiddleware, profile);
router.put("/update",authMiddleware,validation , update);
router.delete("/delete", deleted);

export default router;

