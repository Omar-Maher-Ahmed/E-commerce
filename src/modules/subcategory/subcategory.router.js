import express from "express";
import * as Subcategory from "./controller/subcategory.controller.js";

const router = express.Router();

router.post("/subcategory", Subcategory.createSubcategory);
router.get("/subcategory/:categoryId", Subcategory.getSubcategoriesByCategory);
router.get("/subcategory", Subcategory.getAllSubcategories)
router.put("/subcategory/:id", Subcategory.updateSubcategory);
router.delete("/subcategory/:id", Subcategory.deleteSubcategory);

export default router;
