const { verify } = require('../utils/auth');

const authorization = (req, res, next) => {
  const Bearer = req.headers.authorization;

  if (!Bearer) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    verify(Bearer);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authorization;