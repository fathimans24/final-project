const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
require('../db/connection');
const userModel = require('../model/user');  
router.use(express.json());

router.post('/login', async (req, res) => {
    try {
        const user = await userModel.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password === req.body.password) {
            const payload = { username: user.username };
            const token = jwt.sign(payload, "secret");
            return res.status(200).json({ message: "Login successful", usertoken: token });
        } else {
            return res.status(401).json({ message: "Invalid password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
