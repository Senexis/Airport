const mongoose = require('../config/database');

const flightSchema = require('../models/flight');

const baggageSchema = new mongoose.Schema({
    Weight: {
        type: Number,
        required: true,
        minlength: 1
    },
    Flight: {
        type: flightSchema
    }
});

const Baggages = mongoose.model('Baggages', baggageSchema);

module.exports = Baggages; 