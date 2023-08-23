import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";
import User from "../apis/user/user.model.js";
import { logout } from "../apis/auth/auth.controller.js";

// Verify cookie token middleware
export const verifyCookieToken = async (req, res, next) => {
  const cookies = req.cookies;

  jwt.verify(
    cookies?.access_token,
    process.env.ACCESS_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        console.log(
          "Access token expired or doesn't exist, looking for refresh token...",
          err
        );
        jwt.verify(
          cookies?.refresh_token,
          process.env.REFRESH_TOKEN_SECRET,
          async (err, dec) => {
            if (err) {
              console.log(
                "Refresh token expired or doesn't exist, logging out..."
              );
              return logout(req, res);
            } else {
              console.log(dec);
              const foundUser = await User.findOne({
                email: dec.UserInfo.email,
              });

              if (!foundUser) {
                console.log("User not found, logging out...");
                return logout(req, res);
              }

              const newAccessToken = generateJWT(
                foundUser,
                "5m",
                process.env.ACCESS_TOKEN_SECRET
              );

              res.cookie("access_token", newAccessToken, {
                httpOnly: true,
                secure: false,
                sameSite: "None",
                maxAge: 5 * 60 * 1000,
              });
              console.log(cookies.access_token);
              req.user = dec.UserInfo;

              next();
            }
          }
        );
      } else {
        req.user = decoded.UserInfo;
        next();
      }
    }
  );
};

export const verifyCookieTokenAndAdmin = (req, res, next) => {
  verifyCookieToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("Unauthorized!");
    }
  });
};

export const generateJWT = (user, exp, secret) => {
  const payload = {
    UserInfo: {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
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

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized!" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = decoded.UserInfo;
    next();
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("Unauthorized!");
    }
  });
};
