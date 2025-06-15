import { Router } from "express";
import* as userController from "./controller/user.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.middleware.js";
import { registerValidation, loginValidation } from "./user.validation.js";
const router = Router();

router.post("/register",registerValidation ,userController.register);
router.post("/login",loginValidation ,userController.login);
router.get("/profile",authMiddleware, userController.profile);
router.put("/update",authMiddleware,validation , userController.update);
router.delete("/delete", userController.deleted);

export default router;