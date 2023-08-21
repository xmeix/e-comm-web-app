import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      min: 2,
      max: 60,
    },
    phoneNumber: {
      type: String,
      // required: true,
      validate: /^(0)(5|6|7)[0-9]{8}$/,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      zipCode: {
        type: String,

        validate: /^\d{5}$/,
      },
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
