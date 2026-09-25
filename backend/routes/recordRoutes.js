const express = require("express");
const MedicalRecord = require("../models/MedicalRecord");

const router = express.Router();

// Add medical record
router.post("/", async (req, res) => {
    try {
        const record = new MedicalRecord(req.body);

        await record.save();

        res.status(201).json({
            message: "Medical record added successfully",
            record
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add medical record",
            error: error.message
        });
    }
});

// Get medical records of a patient
router.get("/:patientId", async (req, res) => {
    try {
        const records = await MedicalRecord.find({
            patientId: req.params.patientId
        });

        res.json(records);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get medical records",
            error: error.message
        });
    }
});

module.exports = router;