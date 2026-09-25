const express = require("express");
const Prescription = require("../models/Prescription");

const router = express.Router();

// Add prescription
router.post("/", async (req, res) => {
    try {
        const prescription = new Prescription(req.body);

        await prescription.save();

        res.status(201).json({
            message: "Prescription added successfully",
            prescription
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add prescription",
            error: error.message
        });
    }
});

// Get all prescriptions
router.get("/", async (req, res) => {
    try {
        const prescriptions = await Prescription.find()
            .populate("patientId");

        res.json(prescriptions);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get prescriptions",
            error: error.message
        });
    }
});

// Dispense prescription
router.put("/:id/dispense", async (req, res) => {
    try {
        const prescription = await Prescription.findByIdAndUpdate(
            req.params.id,
            { status: "Dispensed" },
            { new: true }
        );

        if (!prescription) {
            return res.status(404).json({
                message: "Prescription not found"
            });
        }

        res.json({
            message: "Prescription dispensed",
            prescription
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to dispense prescription",
            error: error.message
        });
    }
});

module.exports = router;