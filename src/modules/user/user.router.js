import { Router } from "express";
import * as userController from "./controller/user.controller.js";
const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/profile", userController.profile);
router.put("/update", userController.update);
router.delete("/delete", userController.delete);


export default router;