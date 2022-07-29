const mongoose = require('mongoose');

const recoverPasswordSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  passwordChanged: {
    type: String,
    default: false,
  },
}, { timestamps: true });

mongoose.model('recoverPassword', recoverPasswordSchema);

module.exports = { recoverPasswordSchema };
