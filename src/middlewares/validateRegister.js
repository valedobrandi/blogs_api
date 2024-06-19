const { validateRegisterFields } = require('./validations/validation_login_fields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateRegister = (req, res, next) => {
  const { body } = req;
  try {
    const error = validateRegisterFields(body);
  
    if (error) {
      return res.status(mapStatusHTTP(error.status))
        .json(error.data); 
    }
    
    return next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = validateRegister;