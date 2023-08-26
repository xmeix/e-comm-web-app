import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 6,
      maxlength: 12,
      match: [/^[a-zA-Z0-9]+$/, "Please enter a valid coupon code"],
    },
    discountPercentage: {
      type: Number,
      default: 0,
      validate: (val) => {
        return val >= 0 && val <= 100;
      },
    },
    description: { type: String },
    expiryDate: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
export default Coupon;

// JSON DATA EXAMPLE
// {
//   "name": "Summer Sale",
//   "code": "SUMMER20",
//   "discountPercentage": 20,
//   "description": "Get 20% off on selected items.",
//   "expiryDate": "2023-09-30T00:00:00.000Z"
// }
