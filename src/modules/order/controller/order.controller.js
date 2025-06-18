import Order from "../../../../DB/model/order.model.js";
import Cart from "../../../../DB/model/cart.model.js";

export const placeOrder = async (req, res) => {
  const userId = req.user._id;

  const cart = await Cart.findOne({ userId }).populate("items.productId", "price");

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  let totalPrice = 0;
  const orderItems = cart.items.map(item => {
    const price = item.productId.price;
    totalPrice += price * item.quantity;
    return {
      productId: item.productId._id,
      quantity: item.quantity,
      price,
    };
  });

  const order = await Order.create({
    userId,
    items: orderItems,
    totalPrice,
  });

  await Cart.findOneAndDelete({ userId });

  res.status(201).json({ message: "Order placed successfully", order });
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
};
