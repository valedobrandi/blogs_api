const jwt = require('jsonwebtoken');
const extractToken = require('./extractToken');

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

  return token;
};

const verify = (token) => {
  const BearerExtract = extractToken(token);
  
  return jwt.verify(BearerExtract, JWT_SECRET); 
};

module.exports = { createToken, verify };