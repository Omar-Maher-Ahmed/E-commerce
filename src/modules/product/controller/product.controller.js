import Product from "../../../../DB/model/product.model.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const image = req.file?.filename;
    const product = await Product.create({ ...req.body, image });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Products
export const getAllProducts = async (req, res) => {
  const products = await Product.find()
    .populate("categoryId", "name")
    .populate("subcategoryId", "name");
  res.json(products);
};

// Get Single Product
export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Not Found" });
  res.json(product);
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const image = req.file?.filename;
    const updatedData = image ? { ...req.body, image } : req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (err) {
    console.error("❌ Error updating product:", err);
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Not Found" });
  res.json({ message: "Product deleted successfully" });
};
