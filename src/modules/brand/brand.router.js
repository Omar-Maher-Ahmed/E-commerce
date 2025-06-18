import express from "express";
import {createBrand,getBrands,updateBrand,deleteBrand} from "./controller/brand.controller.js";
import validate from "../../middleware/validation.middleware.js"; //../middlewares/validate.middleware.js

const router = express.Router();

router.post("/", validate, createBrand);
router.get("/", getBrands);
router.put("/:id", validate, updateBrand);
router.delete("/:id", deleteBrand);

export default router;
