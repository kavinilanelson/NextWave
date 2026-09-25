const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },

    doctorName: {
        type: String,
        required: true
    },

    medicine: {
        type: String,
        required: true
    },

    dosage: {
        type: String,
        required: true
    },

    instructions: {
        type: String
    },

    status: {
        type: String,
        default: "Pending"
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Prescription", prescriptionSchema);