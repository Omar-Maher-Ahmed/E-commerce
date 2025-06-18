import express from "express";
import {
  createCoupon,
  getCoupons,
  updateCoupon,
  deleteCoupon
} from "../controllers/coupon.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { couponValidation } from "../validations/coupon.validation.js";

const router = express.Router();

router.post("/", validate(couponValidation.create), createCoupon);
router.get("/", getCoupons);
router.put("/:id", validate(couponValidation.update), updateCoupon);
router.delete("/:id", deleteCoupon);

export default router;
