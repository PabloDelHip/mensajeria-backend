const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
// const { Constants } = require('../../support');

// const USER_ROLES = Object.values(Constants.USER_ROLES);
const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: { type: String },
  password: {
    type: String,
    required: true,
  },
  razon_social: String,
  rfc: String,
  regimen_fiscal: {
    type: String,
    enum: ['Fisica', 'Moral', '']
  },
  nombre_representante_legal: String,
  branches: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'branches',
    },
  ],
  country: String,
  state: String,
  city: String,
  municipalitie: String,
  location: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'locations',
    },
  ],
  role: {
    type: mongoose.Schema.ObjectId,
    ref: 'roles',
  },
  type_client: {
    type: mongoose.Schema.ObjectId,
    ref: 'typeclient',
  },
  type_user: {
    type: String,
    default: 'Client',
    enum: ['Admin', 'Client', 'Corporate'],
  },
  status: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

UsersSchema.plugin(uniqueValidator);
mongoose.model('users', UsersSchema);

module.exports = { UsersSchema };
