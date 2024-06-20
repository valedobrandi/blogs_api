const { Category } = require('../models');

const register = async (name) => {
  const newCategory = await Category.create({ name });

  return { status: 'CREATED', data: newCategory };
};

const searchAll = async () => {
  const catagories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: catagories };
};

const findById = async (id) => {
  const category = await Category.findByPk(id);

  if (!category) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } }; 
  }
  return { status: 'OK', data: category };
};

module.exports = { register, searchAll, findById };