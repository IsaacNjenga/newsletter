import express from "express";
const router = express.Router();

import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

//product endpoints
router.post("/add-product", addProduct);
router.get("/get-all-products", getProducts);
router.get("/get-product/:id", getProduct);
router.put("/update-product", updateProduct);
router.delete("/delete-product", deleteProduct);

export { router as Router };
