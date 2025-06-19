import mongoose, { model, Schema, Types } from 'mongoose';

const categorySchema = new Schema({
    
    name:{type: String , required: true},
    slug:{type: String , required: true},
    image:{type: Object , required: true},
    createdBy:{type: Types.ObjectId , ref: 'User', required: true }

},{timestamps: true});
const categoryModel =mongoose.models.Category || model('Category', categorySchema);

export default categoryModel;