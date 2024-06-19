const schema = require('./schema');

const validateLoginFields = (keysObjectToValidate) => {
  const { error } = schema.loginFields.validate(keysObjectToValidate);

  if (error) {
    return {
      status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } }; 
  }
};

module.exports = { validateLoginFields };