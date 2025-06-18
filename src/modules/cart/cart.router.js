import express from "express";
import {addToCart,getCart,removeFromCart,clearCart,} from "./controller/cart.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/cart", authMiddleware, addToCart);
router.get("/cart", authMiddleware, getCart);
router.delete("/cart/item", authMiddleware, removeFromCart);
router.delete("/cart", authMiddleware, clearCart);

export default router;
