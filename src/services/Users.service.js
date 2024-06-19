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

module.exports = {
  search,
  register,
  searchAll,
};