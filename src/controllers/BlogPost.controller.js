const blogsPostService = require('../services/BlogPost.service');
const usersService = require('../services/Users.service');
const categoriesService = require('../services/Categories.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const user = await usersService.findById(categoryIds[0]);

    if (user.status === 'NOT_FOUND') {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    const categoy = await categoriesService.findById(categoryIds[1]);
    if (categoy.status === 'NOT_FOUND') {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const { status, data } = await blogsPostService
      .create(title, content, categoryIds, req.user);

    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const searchAll = async (req, res, next) => {
  try {
    const { status, data } = await blogsPostService.getAll();

    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const searchById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, data } = await blogsPostService.getById(id);

    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = { create, searchAll, searchById };