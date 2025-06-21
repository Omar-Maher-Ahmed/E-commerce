import {fileURLToPath} from 'url'
import cloudinary from 'cloudinary'

cloudinary.v2.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    secure: true
});

export default cloudinary.v2;
