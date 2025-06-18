import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./user/user.router.js";
import categoryRouter from "./category/category.router.js";
import productRouter from "./product/product.router.js";
import cartRouter from "./cart/cart.router.js";
import orderRouter from "./order/order.router.js";
import brandRoutes from "./brand/brand.router.js";
import reviewRoutes from "./reviews/reviews.router.js";
import couponRoutes from "./coupon/coupon.router.js";
import { orderValidation } from "./order/order.validation.js";
import authRoutes from "./auth/auth.router.js";


const bootstrap = () => {
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
router.post("/", auth, validate(orderValidation.place), placeOrder);
router.put("/:id/status", auth, validate(orderValidation.updateStatus), updateOrderStatus);
app.use("/api/v1/coupons", couponRoutes);
app.use("/api/v1/brands", brandRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1", orderRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", productRouter);
app.use("/uploads", express.static("uploads"));
app.use("/api/v1", categoryRouter);
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

}

  export default bootstrap;
