const Joi = require('joi');

const RoleDto = Joi.object({ name: Joi.string().required() });

module.exports = { RoleDto };
