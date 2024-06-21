const { Op } = require('@sequelize/core');
const { BlogPost, User, Category } = require('../models');

const findByQuery = async (query) => {
  const response = await BlogPost.findAll({
    where: { [Op.or]: {
      title: { [Op.like]: `%${query}%` },
      content: { [Op.like]: `%${query}%` },
    },
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 'OK', data: response };
};
  
module.exports = { findByQuery };