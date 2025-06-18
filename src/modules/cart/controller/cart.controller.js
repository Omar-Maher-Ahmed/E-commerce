import Cart from "./cart.model.js";

// Add to cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ productId, quantity }],
    });
  } else {
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
  }

  res.status(200).json(cart);
};

// Get cart
export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id }).populate("items.productId", "name price image");
  if (!cart) return res.status(404).json({ message: "Cart is empty" });
  res.json(cart);
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  const cart = await Cart.findOne({ userId: req.user._id });

  if (!cart) return res.status(404).json({ message: "Cart not found" });

  cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
  await cart.save();

  res.json({ message: "Item removed", cart });
};

// Clear cart
export const clearCart = async (req, res) => {
  await Cart.findOneAndDelete({ userId: req.user._id });
  res.json({ message: "Cart cleared" });
};

// Get all cart
export const getAllCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id }).populate("items.productId", "name price image");

  if (!cart || cart.items.length === 0) {
    return res.status(404).json({ message: "Cart is empty" });
  }

// Calculate the total price of items in the cart
  const totalPrice = cart.items.reduce((acc, item) => {
    return acc + item.productId.price * item.quantity;
  }, 0);
  res.json({cart,totalPrice});
};
