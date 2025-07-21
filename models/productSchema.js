const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      unique: true,
      trim: true,
      minlength: [3, "Title should be at least 3 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
      default: 3.5,
    },
    description: {
      type: String,
      trim: true,
      default: "No description available",
    },
    quantity: {
      type: Number,
      default: 0,
      min: [0, "Quantity cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["electronics", "clothing", "books", "furniture", "other"],
      lowercase: true,
    },
    brand: {
      type: String,
      trim: true,
      default: "Generic",
    },
    images: [String],
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("product", productSchema);

module.exports = { Product };
