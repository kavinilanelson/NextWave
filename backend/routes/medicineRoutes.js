const express = require("express");
const Medicine = require("../models/Medicine");

const router = express.Router();

// Add medicine
router.post("/", async (req, res) => {
    try {
        const medicine = new Medicine(req.body);

        await medicine.save();

        res.status(201).json({
            message: "Medicine added successfully",
            medicine
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add medicine",
            error: error.message
        });
    }
});

// Get all medicines
router.get("/", async (req, res) => {
    try {
        const medicines = await Medicine.find();

        res.json(medicines);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get medicines",
            error: error.message
        });
    }
});

module.exports = router;