const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = []; // In-memory users for demo
const restaurantOwners = []; // In-memory restaurant owners for demo

// Register customer
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, name, email, password: hashedPassword, role: 'customer' };
  users.push(user);
  const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey');
  res.json({ token, user: { id: user.id, name, email, role: user.role } });
});

// Register restaurant owner
router.post('/register-owner', async (req, res) => {
  const { name, email, password, restaurantName, cuisine, description } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const owner = {
    id: restaurantOwners.length + 1,
    name,
    email,
    password: hashedPassword,
    role: 'restaurant_owner',
    restaurant: {
      id: restaurantOwners.length + 1,
      name: restaurantName,
      cuisine,
      description,
      rating: 0,
      deliveryTime: '25-30 min',
      image: 'assets/images/default-restaurant.jpg'
    }
  };
  restaurantOwners.push(owner);
  const token = jwt.sign({ id: owner.id, role: owner.role }, 'secretkey');
  res.json({ token, user: { id: owner.id, name, email, role: owner.role, restaurant: owner.restaurant } });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check customers first
  let user = users.find(u => u.email === email);
  let userType = 'customer';

  // If not found in customers, check restaurant owners
  if (!user) {
    user = restaurantOwners.find(o => o.email === email);
    userType = 'restaurant_owner';
  }

  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey');

  if (userType === 'restaurant_owner') {
    res.json({ token, user: { id: user.id, name: user.name, email, role: user.role, restaurant: user.restaurant } });
  } else {
    res.json({ token, user: { id: user.id, name: user.name, email, role: user.role } });
  }
});

// Logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out' });
});

// Get current user
router.get('/me', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, 'secretkey');
    const user = users.find(u => u.id === decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user: { id: user.id, name: user.name, email } });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
