const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/authlogin');


router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ msg: 'Server error during registration' });
  }
});

  




router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      
      const user = await User.findOne({ username });
      if (!user) {
        console.log('User not found');
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password does not match');
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token expiry time
      });
  
      
      res.json({ token, role: user.role });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  });
  
module.exports = router;