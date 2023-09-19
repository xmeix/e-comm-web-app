import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    images: [
      {
        type: String,
      },
    ],
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    colors: [
      {
        type: String,
      },
    ],
    sizes: [{ type: String }],
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
      },
    ],
    stock: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    priceUnitAfterDiscount: {
      type: Number,
    },
    discountPercentage: {
      type: Number,
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
        rating: {
          type: Number,
          min: 0,
          max: 5,
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
