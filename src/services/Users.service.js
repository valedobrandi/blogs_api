const { User } = require('../models');

const search = async (email, password) => {
  console.log(email);
  const searchUser = await User.findOne({ where: { email } });
  console.log(searchUser);
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

module.exports = {
  search,
  register,
};