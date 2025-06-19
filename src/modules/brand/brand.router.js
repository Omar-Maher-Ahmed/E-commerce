import express from "express";
import {createBrand,getBrands,updateBrand,deleteBrand} from "./controller/brand.controller.js";
import validate from "../../middleware/validation.middleware.js"; //../middlewares/validate.middleware.js

const router = express.Router();

router.post("/createBrand", validate, createBrand);
router.get("/getBrands", getBrands);
router.put("/updateBrand/:id", validate, updateBrand);
router.delete("/deleteBrand/:id", deleteBrand);

export default router;
