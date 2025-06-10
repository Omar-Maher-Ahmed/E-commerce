import * as createCategory from './controller/category.js'
import {fileUpload , fileValidation} from '../../utils/multer.js';
import { Router } from 'express';

const router = Router();

router.post("/category", 
    fileUpload(fileValidation.image).single('image'),
    categoryController.createCategory
);

export default router;