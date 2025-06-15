// import * as createCategory from './controller/category.js'
// import {fileUpload , fileValidation} from '../../utils/multer.js';
// import { Router } from 'express';

// const router = Router();

// router.post("/category", 
//     fileUpload(fileValidation.image).single('image'),
//     categoryController.createCategory
// );

// export default router;

import express from "express";
import * as Category from "./controller/category.controller.js";

const router = express.Router();

router.post("/category", Category.createCategory);
router.get("/category", Category.getCategories);
router.put("/category/:id", Category.updateCategory);
router.delete("/category/:id", Category.deleteCategory);

export default router;
