import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";

export const generateJWT = (user, exp, secret) => {
  const payload = {
    UserInfo: {
      id: user._id,
      email: user.email,
    },
  };

  const options = {
    expiresIn: exp,
  };

  return jwt.sign(payload, secret, options);
};

export const errorHandler = (res, error) => {
  if (error instanceof CustomError) {
    res.status(error.code).json({ error: error.message });
  } else res.status(500).json({ error: error.message });
};

export const verifyAuthentication = async (req, res, next) => {
  // let refreshToken = req.cookies.refresh_token;
};
