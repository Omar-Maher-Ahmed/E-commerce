import express from "express";
import {createProduct,getAllProducts,getProduct,updateProduct,deleteProduct,} from "./controller/product.controller.js";
import { upload } from "../../middleware/multer.middleware.js";
import validate  from "../../middleware/validation.middleware.js";
import { productValidation } from "./product.validation.js";

const router = express.Router();

router.post("/product", upload.single("image"), validate(productValidation), createProduct);
router.get("/product", getAllProducts);
router.get("/product/:id", getProduct);
router.put("/product/:id", upload.single("image"), validate(productValidation), updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
