const categoriesService = require('../services/Categories.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const register = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { status, data } = await categoriesService.register(name);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const categoriesList = async (req, res, next) => {
  try {
    const { status, data } = await categoriesService.searchAll();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = { register, categoriesList };