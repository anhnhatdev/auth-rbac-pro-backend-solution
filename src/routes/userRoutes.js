const express = require('express');
const router = express.Router();
const { verifyToken, authorize } = require('../middleware/authMiddleware');

// Public route
router.get('/public', (req, res) => {
  res.status(200).json({ message: 'Public endpoint accessible by everyone' });
});

// Protected route for logged-in users only
router.get('/profile', verifyToken, (req, res) => {
  res.status(200).json({ 
    message: 'User profile accessed', 
    user: req.user 
  });
});

// Admin-only route
router.get('/admin', verifyToken, authorize('ADMIN'), (req, res) => {
  res.status(200).json({ 
    message: 'Admin dashboard accessed successfully' 
  });
});

module.exports = router;
