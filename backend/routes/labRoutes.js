const express = require("express");
const LabOrder = require("../models/LabOrder");

const router = express.Router();

// Create lab order
router.post("/", async (req, res) => {
    try {
        const order = new LabOrder(req.body);

        await order.save();

        res.status(201).json({
            message: "Lab order created successfully",
            order
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create lab order",
            error: error.message
        });
    }
});

// Get all lab orders
router.get("/", async (req, res) => {
    try {
        const orders = await LabOrder.find()
            .populate("patientId");

        res.json(orders);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get lab orders",
            error: error.message
        });
    }
});

// Add lab result
router.put("/:id/result", async (req, res) => {
    try {
        const order = await LabOrder.findByIdAndUpdate(
            req.params.id,
            {
                result: req.body.result,
                status: "Completed"
            },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({
                message: "Lab order not found"
            });
        }

        res.json({
            message: "Lab result added successfully",
            order
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add lab result",
            error: error.message
        });
    }
});

module.exports = router;