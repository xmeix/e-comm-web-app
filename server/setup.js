import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoutes from "./apis/auth/auth.route.js";
import userRoutes from "./apis/user/user.route.js";
import productRoutes from "./apis/product/product.route.js";
import categorieRoutes from "./apis/categorie/categorie.route.js";
import orderRoutes from "./apis/order/order.route.js";

export const setupRoutes = (app) => {
  app.use(express.json());
  app.use(helmet());
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

  app.use(bodyParser.json({ limit: "30mb", extended: true }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(cookieParser());
  // ____________________________________________________________________________
  // Enable CORS for API calls
  const corsOptions = {
    credentials: true,
    origin: [
      "http://127.0.0.1:5174",
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    methods: ["PATCH", "GET", "POST", "DELETE"],
  };
  app.use(cors(corsOptions));
  // ____________________________________________________ ________________________

  app.use("/public", express.static("public"));
  app.use("/auth", authRoutes);
  // Set up API routes
  app.use("/user", userRoutes);
  app.use("/products", productRoutes);
  app.use("/categories", categorieRoutes);
  app.use("/orders", orderRoutes);
};
