// import slugify from 'slugify';
// import cloudinary from '../../../utils/cloudinary.js';

// export const createCategory = async (req,res,next) => {
//     const {name} = req.body;
//     const { source_url , publice_id } = await cloudinary.uploader.upload(req.file.path , {folder:`${process.env.APP_NAME}/category`});
//     const category = await categoryModel.create({
//         name,
//         slug: slugify(name, '-'),
//         image: { source_url , publice_id }
//     })
//     return res.status(201).json({message: "Category created successfully", category});
// }


import Category from "../model/category.model.js";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) return res.status(404).json({ message: "Not Found" });
    res.json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Not Found" });
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};