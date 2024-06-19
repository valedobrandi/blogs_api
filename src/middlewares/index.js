const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const authorization = require('./auth');
const validateName = require('./validateName');

module.exports = {
  validateLogin,
  validateRegister,
  authorization,
  validateName,
};