const Joi = require('joi');

const UserDto = Joi.object({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  regimen_fiscal: Joi.string().required(),
});

const UserByEmailDto = Joi.object({ email: Joi.string().email().required() });

const ClientDto = Joi.object({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  razon_social: Joi.string(),
  rfc: Joi.string(),
  regimen_fiscal: Joi.string(),
  nombre_comercial: Joi.string(),
  location: Joi.object().keys({
    neighborhood: Joi.string().required(),
    street: Joi.string().required(),
    outdoor_number: Joi.string(),
    interior_number: Joi.string(),
  }),
  city: Joi.string().required(),
  town: Joi.string().required(),
  state: Joi.string().required(),
  type_client: Joi.string().required(),
});

module.exports = {
  UserDto,
  ClientDto,
  UserByEmailDto,
};
