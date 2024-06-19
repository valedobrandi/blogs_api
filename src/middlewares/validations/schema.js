const Joi = require('joi');

const loginFields = Joi.object({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

const registerUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

module.exports = {
  loginFields,
  registerUser,
};