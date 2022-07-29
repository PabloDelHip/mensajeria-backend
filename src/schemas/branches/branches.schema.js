const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const BranchesSchema = new mongoose.Schema({
  razonsocial: String,
  rfc: String,
  regimen_fiscal: {
    type: String,
    enum: ['Fisica', 'Moral'],
  },
  nombre_representante_legal: String,
  country: String,
  state: String,
  city: String,
  town: String,
  location: {
    postal_code: String,
    neighborhood: String,
    street: String,
    outdoor_number: String,
    interior_number: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  manager: {
    type: String,
    required: true,
  },
  phones: [String],
  emails: [String],
  lat: String,
  long: String,
  map_address: String,
  comments: String,
  status: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

BranchesSchema.plugin(uniqueValidator);
mongoose.model('branches', BranchesSchema);

module.exports = { BranchesSchema };
