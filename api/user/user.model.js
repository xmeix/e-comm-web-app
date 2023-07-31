import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    surname: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    phoneNumber: {
      type: String,
      required: true,
      max: 10,
      validate: /^(0)(5|6|7)[0-9]{8}$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 80,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
 