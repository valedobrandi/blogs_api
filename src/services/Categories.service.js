const { Category } = require('../models');

const register = async (name) => {
  const newCategory = await Category.create({ name });

  return { status: 'CREATED', data: newCategory };
};

const searchAll = async () => {
  const catagories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: catagories };
};

module.exports = { register, searchAll };