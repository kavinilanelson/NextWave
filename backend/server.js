const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const recordRoutes = require("./routes/recordRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const labRoutes = require("./routes/labRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/lab-orders", labRoutes);
app.use("/api/stock", medicineRoutes);
// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "NextWave backend is running"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`NextWave backend running on http://localhost:${PORT}`);
});