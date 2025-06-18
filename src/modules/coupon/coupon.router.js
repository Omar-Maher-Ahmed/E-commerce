import express from "express";
import {createCoupon,getCoupons,updateCoupon,deleteCoupon} from "./controller/coupon.controller.js";
import validate from "../../middleware/validation.middleware.js";
import { couponValidation } from "./coupon.validation.js";

const router = express.Router();

router.post("/", validate(couponValidation.create), createCoupon);
router.get("/", getCoupons);
router.put("/:id", validate(couponValidation.update), updateCoupon);
router.delete("/:id", deleteCoupon);

export default router;
