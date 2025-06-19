import express from "express";
import {createProduct,getAllProducts,getProduct,updateProduct,deleteProduct,} from "./controller/product.controller.js";
import { upload } from "../../middleware/multer.middleware.js";
import validate  from "../../middleware/validation.middleware.js";
import { productValidation } from "./product.validation.js";

const router = express.Router();

router.post("/createProduct", upload.single("image"), validate(productValidation), createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getProduct/:id", getProduct);
router.put("/updateProduct/:id", upload.single("image"), validate(productValidation), updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
