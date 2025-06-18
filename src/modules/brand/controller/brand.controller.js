import Brand from "../models/brand.model.js";

export const createBrand = async (req, res) => {
  const { name, logo } = req.body;
  const exists = await Brand.findOne({ name });
  if (exists) return res.status(400).json({ message: "Brand already exists" });

  const brand = new Brand({ name, logo });
  await brand.save();
  res.status(201).json(brand);
};

export const getBrands = async (req, res) => {
  const brands = await Brand.find();
  res.status(200).json(brands);
};

export const updateBrand = async (req, res) => {
  const { id } = req.params;
  const updated = await Brand.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updated);
};

export const deleteBrand = async (req, res) => {
  const { id } = req.params;
  await Brand.findByIdAndDelete(id);
  res.status(204).send();
};
