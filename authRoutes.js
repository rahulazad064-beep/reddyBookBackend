const express = require("express");
const router = express.Router();
const User = require("./User");

// 1️⃣ POST API - Store email/number + password
router.post("/create", async (req, res) => {
    try {
        const { emailOrNumber, password } = req.body;

        if (!emailOrNumber || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const user = await User.create({ emailOrNumber, password });

        res.status(201).json({
            message: "Data saved successfully",
            data: user,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

// 2️⃣ GET API - Retrieve all data
router.get("/all", async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json({ total: users.length, data: users });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

module.exports = router;


