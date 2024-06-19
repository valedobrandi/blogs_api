const { validateLoginFields } = require('./validations/validationfields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateLogin = (req, res, next) => {
  const { body } = req;
  try {
    const error = validateLoginFields(body);
  
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

module.exports = validateLogin;
