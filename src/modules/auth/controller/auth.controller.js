import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "./../../../../DB/model/user.model.js"; // ./user.model.js
import { registerSchema, loginSchema } from "../auth.validatoin.js"; // ./auth.validation.js

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

export const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { username, email, password } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).json({ error: 'Email already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed });

  res.status(201).json({ message: 'User registered successfully', user });
};

export const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Incorrect password' });

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: '7d',
  });

  res.status(200).json({ message: 'Login successful', token });
};
