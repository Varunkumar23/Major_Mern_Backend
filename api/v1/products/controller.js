const { Product } = require("../../../models/productSchema");
const { handleGenericApiError } = require("../../../utils/controllerHelpers");

const getAllProductsByCategory = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      isSuccess: true,
      message: "Products list Fetched!",
      data:{
        products:allProducts,
      },
    });
  } catch (err) {
    handleGenericApiError("getAllProductsByCategory", req, res, err.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        isSuccess: false,
        message: "Product Not Found",
        data: {},
      });

      res.status(200).json({
        isSuccess: true,
        message: "Product Fetched Successfully",
        data: product,
      });
    }
  } catch (err) {
    handleGenericApiError("getProductById", req, res, err);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      isSuccess: true,
      message: "Product added Successfully!",
      data: newProduct,
    });
  } catch (err) {
    handleGenericApiError("createProduct", req, res, err);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateProduct) {
      res.status(404).json({
        isSuccess: false,
        messgae: "Product Not Found",
        data: {},
      });
    }

    res.status(200).json({
      isSuccess: true,
      message: "Product Updated Successfully",
      data: updateProduct,
    });
  } catch (err) {
    handleGenericApiError(updateProduct, req, res, err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        isSuccess: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      isSuccess: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    handleGenericApiError("deleteProduct", req, res, err.message);
  }
};

module.exports = {
  getAllProductsByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
