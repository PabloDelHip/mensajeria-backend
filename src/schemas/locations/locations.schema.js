const mongoose = require('mongoose');

const LocationsSchema = new mongoose.Schema({
  alias: {
    type: String,
    required: true,
  },
  name_last_name: {
    type: String,
    required: true,
  },
  street_and_number: {
    type: String,
    required: true,
  },
  cp: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: mongoose.Schema.ObjectId,
    ref: 'states',
  },
  municipalitie: {
    type: mongoose.Schema.ObjectId,
    ref: 'municipalities',
  },
  colonie: {
    type: mongoose.Schema.ObjectId,
    ref: 'colonies',
  },
  phone: {
    type: String,
    required: true,
  },
  home_phone: String,
  reference: String,
  delivery_instructions: String,
  status: {
    type: Boolean,
    default: true,
  },
  default: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

mongoose.model('locations', LocationsSchema);

module.exports = { LocationsSchema };
