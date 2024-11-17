const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register/client', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password, accountType: 'client' });
    await newUser.save();
    res.status(201).json({ message: 'Client registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering client', error });
  }
});

// Register as Freelancer
router.post('/register/freelancer', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password, accountType: 'freelancer' });
    await newUser.save();
    res.status(201).json({ message: 'Freelancer registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering freelancer', error });
  }
});

module.exports = router;
