import express from "express";
import { createReview, getProductReviews } from "./controller/reviews.controller.js";
import reviewValidation from "../../middleware/validation.middleware.js"; 
import authMiddleware from "../../middleware/auth.middleware.js"; 

const router = express.Router();

router.post("/", authMiddleware, reviewValidation, createReview);
router.get("/:productId", getProductReviews);

export default router;
