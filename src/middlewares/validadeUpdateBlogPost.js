const { validateUpdateBlogPostField } = require('./validations/validationfields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateUpdateBlogPost = (req, res, next) => {
  const { body } = req;
  try {
    const error = validateUpdateBlogPostField(body);
  
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

module.exports = validateUpdateBlogPost;