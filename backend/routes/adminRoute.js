const express = require('express');
const router = express.Router();
const User = require('../model/authlogin');  


router.get('/dashboard', async (req, res) => {
  try {
    
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ active: true }); 

    const users = await User.find().select('username email role'); 

    res.json({
      stats: { totalUsers, activeUsers },
      users: users
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
