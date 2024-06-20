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

const nameField = Joi.object({
  name: Joi.string().min(1).required(),
});

const blogPostFields = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.required(),
});

module.exports = {
  loginFields,
  registerUser,
  nameField,
  blogPostFields,
};