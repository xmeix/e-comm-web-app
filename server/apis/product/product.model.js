import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    pictures: [
      {
        type: String,
      },
    ],
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
      },
    ],
    quantity: {
      type: Number,
      default: 0,
    },
    priceUnit: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    comments: [
      {
        pictures: [
          {
            type: String,
          },
        ],
        content: String,
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
