import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { setupRoutes } from "./setup.js";

const toId = mongoose.Types.ObjectId;

// Configure environment variables
dotenv.config();

// Create an instance of express
const app = express();

setupRoutes(app);

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
