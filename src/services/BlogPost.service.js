const { Sequelize } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
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

const getAll = async () => {
  const searhAllBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' },
    ],
  });

  console.log(JSON.stringify(searhAllBlogPosts, null, 2));

  return { status: 'SUCCESSFUL', data: searhAllBlogPosts };
};

module.exports = { create, getAll };