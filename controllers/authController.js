import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export async function signup(req, res) {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    const token = user.generateToken();
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error signing up', error });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  // email = email.toLowerCase();
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = user.generateToken();
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
}

export function continueWithoutSignup(req, res) {
  // temp token
  const tempToken = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ tempToken });
}
