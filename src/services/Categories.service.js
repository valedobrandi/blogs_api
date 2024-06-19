const { Category } = require('../models');

const register = async (name) => {
  const newCategory = await Category.create({ name });

  return { status: 'CREATED', data: newCategory };
};

module.exports = { register };