import { Router } from "express";
import * as userController from "./controller/user.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile",authMiddleware, userController.profile);
router.put("/update",authMiddleware,validation, userController.update);
router.delete("/delete", userController.deleted);


export default router;