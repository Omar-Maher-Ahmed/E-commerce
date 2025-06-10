import {fileURLToPath} from 'url'
import path from 'path'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
const  __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({path: path.join(__dirname, '../../config/.env')})

cloudinary.v2.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    secure: true
});

export default cloudinary.v2;
