import express from "express";
import { createReview, getProductReviews } from "../controllers/review.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { reviewValidation } from "../validations/review.validation.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", auth, validate(reviewValidation.create), createReview);
router.get("/:productId", getProductReviews);

export default router;
