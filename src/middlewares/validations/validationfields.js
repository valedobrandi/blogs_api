const schema = require('./schema');

const validateLoginFields = (keysObjectToValidate) => {
  const { error } = schema.loginFields.validate(keysObjectToValidate);

  if (error) {
    return {
      status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } }; 
  }
};

const validateRegisterFields = (keysObjectToValidate) => {
  const { error } = schema.registerUser.validate(keysObjectToValidate);

  if (error) {
    return {
      status: 'BAD_REQUEST', data: { message: error.message } }; 
  }
};

const validateNameField = (keysObjectToValidate) => {
  const { error } = schema.nameField.validate(keysObjectToValidate);
  
  if (error) {
    return {
      status: 'BAD_REQUEST', data: { message: error.message } }; 
  }
};

module.exports = {
  validateLoginFields, validateRegisterFields, validateNameField, 
};