import Category from "../../../../DB/model/Category.model.js";

// ✅ Create Category
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Category created successfully",
      data: category
    });
  } catch (error) {
    console.error("❌ Error in createCategory:", error);
    res.status(400).json({ status: "error", message: error.message });
  }
};

// ✅ Get All Categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      status: "success",
      data: categories
    });
  } catch (error) {
    console.error("❌ Error in getCategories:", error);
    res.status(500).json({ status: "error", message: "Failed to fetch categories" });
  }
};

// ✅ Update Category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ status: "error", message: "Missing category ID" });
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(404).json({ status: "error", message: "Category not found" });
    }
    res.status(200).json({
      status: "success",
      message: "Category updated successfully",
      data: category
    });
  } catch (error) {
    console.error("❌ Error in updateCategory:", error);
    res.status(400).json({ status: "error", message: error.message });
  }
};

// ✅ Delete Category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ status: "error", message: "Missing category ID" });
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ status: "error", message: "Category not found" });
    }
    res.status(200).json({
      status: "success",
      message: "Category deleted successfully"
    });
  } catch (error) {
    console.error("❌ Error in deleteCategory:", error);
    res.status(400).json({ status: "error", message: error.message });
  }
};
