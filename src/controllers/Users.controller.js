const usersService = require('../services/Users.service');
const { createToken } = require('../utils/auth');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await usersService.search(email, password);
  if (status === 'BAD_REQUEST') {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  const token = createToken({ email });

  return res.status(mapStatusHTTP(status)).json({ token });
};

module.exports = {
  login,
};