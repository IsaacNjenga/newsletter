import express from "express";
const router = express.Router();

import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { deleteImage } from "../controllers/cloudinaryController.js";

//product endpoints
router.post("/add-product", addProduct);
router.get("/get-all-products", getProducts);
router.get("/get-product", getProduct);
router.put("/update-product", updateProduct);
router.delete("/delete-product", deleteProduct);

//cloudinary endpoint
router.delete("/delete-image", deleteImage);

export { router as Router };
