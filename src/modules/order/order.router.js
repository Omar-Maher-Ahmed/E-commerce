import express from "express";
import { placeOrder, getUserOrders } from "./order.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/order", authMiddleware, placeOrder);
router.get("/orders", authMiddleware, getUserOrders);

export default router;
