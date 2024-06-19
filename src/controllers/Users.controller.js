const usersService = require('../services/Users.service');
const { createToken } = require('../utils/auth');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { status, data } = await usersService.search(email, password);
    if (status === 'BAD_REQUEST') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
  
    const token = createToken({ email });
  
    return res.status(mapStatusHTTP(status)).json({ token });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;
    const image = req.body.image ? req.body.image : '';

    const { status } = await usersService.search(email, password);
  
    if (status === 'OK') {
      return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = await usersService.register(displayName, email, password, image);
    
    const token = createToken({ email });

    return res.status(mapStatusHTTP(newUser.status)).json({ token });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {
  login,
  create,
};