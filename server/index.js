import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoutes from "./auth/auth.route.js";
import userRoutes from "./user/user.route.js";

const toId = mongoose.Types.ObjectId;
// Configure environment variables
dotenv.config();

// Create an instance of express
const app = express();

// Set up middleware
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
// ____________________________________________________ ________________________
// Set up API routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");

    // Start listening for HTTP requests
    const server = app.listen(process.env.PORT || 6001, () => {
      console.log(`Server listening on port ${process.env.PORT || 6001}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to MongoDB database: ${error.message}`);
  });
