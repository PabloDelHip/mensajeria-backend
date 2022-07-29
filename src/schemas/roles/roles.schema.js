const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate-v2');

const RolesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  read: {
    status: {
      type: Boolean,
      default: false,
      required: true,
    },
    listModules: [String],
  },
  edit: {
    status: {
      type: Boolean,
      default: false,
      required: true,
    },
    listModules: [String],
  },
  create: {
    status: {
      type: Boolean,
      default: false,
      required: true,
    },
    listModules: [String],
  },
  admin: {
    type: Boolean,
    default: false,
    required: true,
  },
  delete: {
    type: Boolean,
    default: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

RolesSchema.plugin(uniqueValidator);
RolesSchema.plugin(mongoosePaginate);
mongoose.model('roles', RolesSchema);

module.exports = { RolesSchema };
