const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const authorization = require('./auth');

module.exports = {
  validateLogin,
  validateRegister,
  authorization,
};