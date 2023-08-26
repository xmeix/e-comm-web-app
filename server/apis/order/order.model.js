import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    price_be_reduction: {
      type: Number,
      required: true,
    },
    price_af_reduction: {
      type: Number,
      default: function () {
        return this.price_be_reduction;
      },
    },
    shippingCost: Number,
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Card"],
      required: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: Date,
    isCancelled: {
      type: Boolean,
      required: true,
      default: false,
    },
    cancelledAt: Date,
    cancellationReason: String,
    usedCoupon: {
      type: mongoose.Types.ObjectId,
      ref: "Coupon",
      required: true,
    },
    createdBy: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

// Define a pre-save hook to calculate totalPrice
OrderSchema.pre("save", function (next) {
  this.totalPrice = this.price_af_reduction + this.shippingCost;
  next();
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
