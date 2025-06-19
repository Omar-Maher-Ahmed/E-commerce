import express from "express";
import {addToCart,getCart,removeFromCart,clearCart,} from "./controller/cart.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/addToCart", authMiddleware, addToCart);
router.get("/getCart", authMiddleware, getCart);
router.delete("/removeFromCart/:id", authMiddleware, removeFromCart);
router.delete("/clearCart", authMiddleware, clearCart);

export default router;
