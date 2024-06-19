const { validateLoginFields } = require('./validations/validation_login_fields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateLogin = (req, res, next) => {
  const { body } = req;
  const error = validateLoginFields(body);

  if (error) {
    return res.status(mapStatusHTTP(error.status))
      .json(error.data); 
  }
  
  return next();
};

module.exports = {
  validateLogin,
};