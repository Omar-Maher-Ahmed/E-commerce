import express from "express";
import { placeOrder, getUserOrders } from "./controller/order.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/order", authMiddleware, placeOrder);
router.get("/orders", authMiddleware, getUserOrders);

export default router;
