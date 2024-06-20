const { verify } = require('../utils/auth');
const usersService = require('../services/Users.service');

const authorization = async (req, res, next) => {
  const Bearer = req.headers.authorization;

  if (!Bearer) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = verify(Bearer);
    const user = await usersService.searchByEmail(decoded.email);

    console.log(user.data.id);
    if (user.status === 'BAD_REQUEST') {
      return res.status(400).json({ message: 'Expired or invalid token' });
    }
    req.user = user.data.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authorization;