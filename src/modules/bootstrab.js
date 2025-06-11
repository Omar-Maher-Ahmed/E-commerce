import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./modules/user/user.router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017/ecommerce";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running on http://127.0.0.1:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
