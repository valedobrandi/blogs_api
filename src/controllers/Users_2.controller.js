const usersService = require('../services/Users.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const removeById = async (req, res, next) => {
  try {
    const { status } = await usersService.remove(req.user);
    return res.status(mapStatusHTTP(status)).json({});
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = { removeById };