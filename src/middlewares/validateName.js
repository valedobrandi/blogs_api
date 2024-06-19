const { validateNameField } = require('./validations/validationfields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateName = (req, res, next) => {
  const { body } = req;
  try {
    const error = validateNameField(body);
  
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

module.exports = validateName;