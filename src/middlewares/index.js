const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const authorization = require('./auth');
const validateName = require('./validateName');
const validateBlogPostField = require('./validateBlogPostField');
const validadeUpdateBlogPost = require('./validadeUpdateBlogPost');

module.exports = {
  validateLogin,
  validateRegister,
  authorization,
  validateName,
  validateBlogPostField,
  validadeUpdateBlogPost,
};