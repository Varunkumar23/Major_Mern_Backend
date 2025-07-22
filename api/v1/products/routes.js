const express = require("express");
const {
  getAllProductsByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  authMiddle,
} = require("./controller");
const { Product } = require("../../../models/productSchema");
const { adminMiddleware } = require("../auth/controllers");
const { authMiddleware } = require("../../../utils/authMiddleware");

const productRouter = express.Router();

productRouter.get("/", getAllProductsByCategory);
productRouter.get("/:id", getProductById);

productRouter.post("/", createProduct);
productRouter.patch("/:id", authMiddleware, updateProduct);

productRouter.delete("/:id", authMiddleware, deleteProduct);

module.exports = { productRouter };
