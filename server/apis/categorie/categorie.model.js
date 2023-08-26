import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema(
  {
    banners: [
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
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product schema
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Categorie = mongoose.model("Categorie", CategorieSchema);
export default Categorie;
