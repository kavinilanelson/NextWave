const mongoose = require("mongoose");

const labOrderSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },

    doctorName: {
        type: String,
        required: true
    },

    testName: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Ordered"
    },

    result: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("LabOrder", labOrderSchema);