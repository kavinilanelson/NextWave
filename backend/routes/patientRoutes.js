const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

// Add patient
router.post("/", async (req, res) => {
    try {
        const patient = new Patient(req.body);

        await patient.save();

        res.status(201).json({
            message: "Patient added successfully",
            patient
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add patient",
            error: error.message
        });
    }
});

// Get patient by ABHA ID
router.get("/:abhaId", async (req, res) => {
    try {
        const patient = await Patient.findOne({
            abhaId: req.params.abhaId
        });

        if (!patient) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        res.json(patient);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get patient",
            error: error.message
        });
    }
});

module.exports = router;