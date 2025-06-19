import express from "express";
import { placeOrder, getUserOrders } from "./controller/order.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/placeOrder", authMiddleware, placeOrder);
router.get("/getUserOrders", authMiddleware, getUserOrders);

export default router;
