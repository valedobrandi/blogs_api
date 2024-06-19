const { User } = require('../models');

const search = async (email, password) => {
  const searchUser = await User.findAll({ where: { email } });

  if (searchUser.length < 1 || searchUser[0].password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  return { status: 'OK', data: searchUser };
};

module.exports = {
  search,
};