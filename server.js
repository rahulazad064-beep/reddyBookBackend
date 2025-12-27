const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const authRoutes = require("./authRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({origin: "*"}));

// Connect DB
connectDB();

// Routes
app.use("/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


