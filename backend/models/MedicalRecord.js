const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },

    doctorName: {
        type: String,
        required: true
    },

    diagnosis: {
        type: String
    },

    symptoms: {
        type: String
    },

    notes: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);