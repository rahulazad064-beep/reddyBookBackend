const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

// Connect DB
connectDB();

// Routes
app.use("/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
