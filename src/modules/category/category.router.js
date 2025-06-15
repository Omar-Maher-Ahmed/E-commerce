import express from "express";
import * as Category from "./controller/category.controller.js";
import validate from "../../middleware/validation.middleware.js";

const router = express.Router();

router.post("/category", validate(createCategoryValidation), Category.createCategory);
router.get("/category", validate(createCategoryValidation), Category.getCategories);
router.put("/category/:id", validate(createCategoryValidation), Category.updateCategory);
router.delete("/category/:id", validate(createCategoryValidation), Category.deleteCategory);

export default router;
