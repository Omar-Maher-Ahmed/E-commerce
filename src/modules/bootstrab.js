import express from "express";
import mongoose from "mongoose";
import userRouter from "./user/user.router.js";
import categoryRouter from "./category/category.router.js";
import productRouter from "./product/product.router.js";
import cartRouter from "./cart/cart.router.js";
import orderRouter from "./order/order.router.js";
import brandRoutes from "./brand/brand.router.js";
import reviewRoutes from "./reviews/reviews.router.js";
import couponRoutes from "./coupon/coupon.router.js";
import authRoutes from "./auth/auth.router.js";
import { connectDB } from "../../DB/connection.js";

await connectDB();

const bootstrap = (app) => {

  app.use('/api/auth', authRoutes);
  app.use("/api/coupons", couponRoutes);
  app.use("/api/brands", brandRoutes);
  app.use("/api/reviews", reviewRoutes);
  app.use("/api/order", orderRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/product", productRouter);
  app.use("/uploads", express.static("uploads"));
  app.use("/api/category", categoryRouter);
  app.use("/api/user", userRouter);

  app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  });

  const PORT = process.env.PORT || 5000;
  const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017/ecommerce";

  mongoose.connect(DB_URI).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running on http://127.0.0.1:${PORT}`)
    );
  })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });

}

export default bootstrap;

// the first time to run project  