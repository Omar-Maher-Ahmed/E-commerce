import { Router } from "express";
import {register,login,profile,update,deleted,getAllUsers,} from "./controller/user.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.middleware.js";
import {registerValidation,loginValidation,} from "./user.validation.js";

const router = Router();

router.post("/register", validation(registerValidation), register);
router.post("/login", validation(loginValidation), login);
router.get("/profile", authMiddleware, profile);
router.get("/getAllUsers", authMiddleware, getAllUsers);
router.put("/update", authMiddleware, validation(registerValidation), update);
router.delete("/delete",authMiddleware, deleted);

export default router;
