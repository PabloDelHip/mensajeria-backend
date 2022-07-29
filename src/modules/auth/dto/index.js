const Joi = require('joi');

const AuthDto = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const RecoverPasswordDto = Joi.object({ email: Joi.string().email().required() });

const ChangePasswordDto = Joi.object({
  params: Joi.object().keys({ token: Joi.string().required() }),
  body: Joi.object().keys({ password: Joi.string().required() }),
});

const ValidateTokenPasswordDto = Joi.object({ token: Joi.string().required() });

module.exports = {
  AuthDto,
  RecoverPasswordDto,
  ChangePasswordDto,
  ValidateTokenPasswordDto,
};
