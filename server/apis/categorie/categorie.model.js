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
  },
  {
    timestamps: true,
  }
);

const Categorie = mongoose.model("Categorie", CategorieSchema);
export default Categorie;
