import * as db from "../../../../DB/dbMethod.js";
import User from "./../../../../DB/model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const existEmail = await User.findOne({ email: req.body.email });
    if (existEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const login = async (req, res, next) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (!checkUser) {
      return res.status(400).json({ message: "Email not found" });
    }
    const match = await bcrypt.compare(req.body.password, checkUser.password);
    if (!match) {
      return res.status(400).json({ message: "Password is incorrect" });
    }
    const token = jwt.sign(
      {id: checkUser._id, name: checkUser.name, email: checkUser.email },
      "WelcomeToMyWorld",
      { expiresIn: 60 * 60 }
    );
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

// export const login = async (req, res, next) =>{
//     try {
//       const checkUser = await User.findOne({email: req.body.email})
//     if(!checkUser){
//         return res.status(400).json({message:"Email not found"})
//     }
//     const match = await bcrypt.compare(req.body.password, checkUser.password)
//     if(!match){
//         return res.status(400).json({message:"Password is incorrect"})
//     }
//     const token = jwt.sign(
//         {password: checkUser.password, email: checkUser.email},
//         "WelcomeToMyWorld",
//         {expiresIn: 60*60}
//     );
//     return res.status(200).json({message:"Login Successfully", token});
//     } catch (error) {
//       return res.status(500).json({ message: "Internal Server Error", error });
//     }
// }

export const profile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("password"); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    const userId = req.user.id;
    const updatedData = {};
    if (req.body.name) updatedData.name = req.body.name;
    if (req.body.email) updatedData.email = req.body.email;
    if (req.body.password) {
      updatedData.password = await bcrypt.hash(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedData },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleted = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required: name, email, password" });
    }
    const user = await User.findOne({ name, email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    await User.deleteOne({ _id: user._id });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// export const deleted = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const deleted = await User.findByIdAndDelete(userId);
//     if (!deleted) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     return res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

export const getAllUsers = async (req, res) => {
  const users = await db.getAll(User);
  res.json(users);
};