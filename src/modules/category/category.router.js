import express from "express";
import * as Category from "./controller/category.controller.js";
import validate from "../../middleware/validation.middleware.js";

const router = express.Router();

router.post("/createCategory", validate, Category.createCategory);
router.get("/getCategories", validate, Category.getCategories);
router.put("/updateCategory/:id", validate, Category.updateCategory);
router.delete("/deleteCategory/:id", validate, Category.deleteCategory);

export default router;
