const { Sequelize } = require('sequelize');
const { PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const create = async (postId, ids) => {
  const result = await sequelize.transaction(async (t) => {
    const inserts = ids.map(async (id) => PostCategory.findOrCreate({
      where: { postId },
      defaults: { postId, categoryId: id },
      transaction: t,
    }));
    return Promise.all(inserts);
  });
  
  return { status: 'CREATED', data: result };
};

module.exports = { create };