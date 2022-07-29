const mongoose = require('mongoose');

const UnitsSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  license_plates: {
    type: String,
    required: true,
  },
  serial_number: String,
  capacity: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  in_service: {
    type: Boolean,
    default: false,
  },
  description: String,
  location: {
    type: mongoose.Schema.ObjectId,
    ref: 'municipalities',
  },
  driver: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  policy: String,
  last_maintenance: Date,
  estimated_maintenance: Date,
  additional_information: String,
  status: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

module.exports = { UnitsSchema };  
