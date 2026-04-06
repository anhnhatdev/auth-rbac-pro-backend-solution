const jwt = require('jsonwebtoken');
const { users } = require('../utils/db');
const { hashPassword, comparePassword } = require('../utils/auth');

const register = async (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await hashPassword(password);
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword,
    role: 'USER',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', userId: newUser.id });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.status(200).json({
    message: 'Login successful',
    token,
    user: { id: user.id, username: user.username, role: user.role }
  });
};

module.exports = {
  register,
  login
};
