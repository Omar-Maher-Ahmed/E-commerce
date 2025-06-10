import slugify from 'slugify';
import cloudinary from '../../../utils/cloudinary.js';




export const createCategory = async (req,res,next) => {
    const {name} = req.body;
    const { source_url , publice_id } = await cloudinary.uploader.upload(req.file.path , {folder:`${process.env.APP_NAME}/category`});
    const category = await categoryModel.create({
        name,
        slug: slugify(name, '-'),
        image: { source_url , publice_id }
    })
    return res.status(201).json({message: "Category created successfully", category});
}


