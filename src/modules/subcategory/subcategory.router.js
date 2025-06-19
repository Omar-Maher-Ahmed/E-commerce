import express from "express";
import * as Subcategory from "./controller/subcategory.controller.js";

const router = express.Router();

router.post("/createSubcategory", Subcategory.createSubcategory);
router.get("/getSubcategoriesByCategory/:categoryId", Subcategory.getSubcategoriesByCategory);
router.get("/getAllSubcategories", Subcategory.getAllSubcategories)
router.put("/updateSubcategory/:id", Subcategory.updateSubcategory);
router.delete("/deleteSubcategory/:id", Subcategory.deleteSubcategory);

export default router;
