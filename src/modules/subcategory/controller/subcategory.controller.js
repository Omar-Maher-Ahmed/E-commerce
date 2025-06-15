import Subcategory from "./subcategory.model.js";

export const createSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.create(req.body);
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSubcategoriesByCategory = async (req, res) => {
  const { categoryId } = req.params;
  const subcategories = await Subcategory.find({ categoryId });
  res.json(subcategories);
};

export const getAllSubcategories = async (req, res) => {
  const subcategories = await Subcategory.find();
  res.json(subcategories);
};

export const updateSubcategory = async (req, res) => {
  const { id } = await req.params;
  const subcategory = await Subcategory.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(subcategory);
  };

  export const deleteSubcategory = async (req, res) => {
  const { id } = await req.params;
  const subcategory = await Subcategory.findByIdAndDelete(id);
  res.json(subcategory);
  };

export default Subcategory 