const { Sequelize } = require('sequelize');
const { BlogPost } = require('../models');
const postCategoriesService = require('./PostCategories.service');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const create = async (title, content, categoryIds, id) => {
  const insertBlogPost = await sequelize.transaction(async (t) => {
    const registerBlogPost = await BlogPost.create({
      title, content, userId: id, published: Date(), updated: Date(),  
    }, { transaction: t });
    
    return registerBlogPost;
  });

  await postCategoriesService.create(insertBlogPost.id, categoryIds);
  
  return { status: 'CREATED', data: insertBlogPost };
};

module.exports = { create };