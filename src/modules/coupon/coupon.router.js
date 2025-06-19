import express from "express";
import {createCoupon,getCoupons,updateCoupon,deleteCoupon} from "./controller/coupon.controller.js";
import validate from "../../middleware/validation.middleware.js";
import { couponValidation } from "./coupon.validation.js";

const router = express.Router();

router.post("/createCoupon", validate(couponValidation.create), createCoupon);
router.get("/getCoupons", getCoupons);
router.put("/updateCoupon/:id", validate(couponValidation.update), updateCoupon);
router.delete("/deleteCoupon/:id", deleteCoupon);

export default router;
