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
import { createCategory, getCategories } from "./category.controller.js";

const router = express.Router();

// Category routes
router.post("/category", createCategory);
router.get("/category", getCategories);

export default router;
