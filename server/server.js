require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const apiRoutes = require('./routes'); // ✅ Ensure this exports a router
const checkoutRoute = require('./routes/checkout'); // ✅ Ensure this exists and exports a router

const app = express();

// 🔐 Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // fallback for local testing
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// 🧭 Main API Routes
app.use("/api", apiRoutes); // ✅ Ensure routes/index.js exports a router
app.use("/api/checkout", checkoutRoute); // ✅ Ensure routes/checkout.js exists

// 🌐 Port Setup
const PORT = process.env.PORT || 8080;

// 📦 Connect DB & Start Server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("✅ Connected to DB");
        console.log(`🚀 Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
});
