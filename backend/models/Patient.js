const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    abhaId: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    phone: {
        type: String
    },

    address: {
        type: String
    }
});

module.exports = mongoose.model("Patient", patientSchema);