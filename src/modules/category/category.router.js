import express from "express";
import * as Category from "./controller/category.controller.js";
import validate from "../../middleware/validation.middleware.js";

const router = express.Router();

router.post("/category", validate, Category.createCategory);
router.get("/category", validate, Category.getCategories);
router.put("/category/:id", validate, Category.updateCategory);
router.delete("/category/:id", validate, Category.deleteCategory);

export default router;
