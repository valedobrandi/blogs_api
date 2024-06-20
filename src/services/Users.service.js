const { User } = require('../models');

const search = async (email, password) => {
  const searchUser = await User.findOne({ where: { email } });

  if (!searchUser) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  if (searchUser.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  return { status: 'OK', data: searchUser };
};

const register = async (displayName, email, password, image) => {
  const registerUser = User.create({ displayName, email, password, image });
  
  return { status: 'CREATED', data: registerUser };
};

const searchAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return { status: 'OK', data: users };
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } }; 
  }
  return { status: 'OK', data: user };
};

const searchByEmail = async (email) => {
  const searchUser = await User.findOne({ where: { email } });

  if (!searchUser) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  return { status: 'OK', data: searchUser };
};

module.exports = {
  search,
  register,
  searchAll,
  findById,
  searchByEmail,
};