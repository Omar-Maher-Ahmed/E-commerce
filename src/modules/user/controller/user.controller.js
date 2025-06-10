import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req,res, next) => {
    const existEmail = await User.findOne({email: req.body.email})
    if(existEmail){
        return res.status(400).json({message:"Email already exists"})
    }
const hashPassword = await bcrypt.hash(req.body.password, 10)
const user = new User(req , res)
await user.password(hashPassword).save()
return res.status(201).json(user)

}

const login = async (req, res, next) =>{
    console.log(req.body);
    const checkUser = await User.findOne({email: req.body.email})
    if(!checkUser){
        return res.status(400).json({message:"Email not found"})
    }
    const match = bcrypt.compare(req.body.password, checkUser.password)
    if(!match){
        return res.status(400).json({message:"Password is incorrect"})
    }
    const token = jwt.sign(
        {name: checkUser.name, email: checkUser.email},
        "WelcomeToMyWorld",
        {expiresIn: 60*60}
    )
}

