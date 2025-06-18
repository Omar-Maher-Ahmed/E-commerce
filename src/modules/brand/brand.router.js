import express from "express";
import {
  createBrand,
  getBrands,
  updateBrand,
  deleteBrand
} from "../controllers/brand.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { brandValidation } from "../validations/brand.validation.js";

const router = express.Router();

router.post("/", validate(brandValidation.create), createBrand);
router.get("/", getBrands);
router.put("/:id", validate(brandValidation.update), updateBrand);
router.delete("/:id", deleteBrand);

export default router;
