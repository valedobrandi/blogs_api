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
  return { status: 'SUCCESSFUL', data: searhAllBlogPosts };
};

const getById = async (id) => {
  const searchBlogPostById = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' },
    ],
  });

  if (searchBlogPostById === null) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }
  return { status: 'SUCCESSFUL', data: searchBlogPostById };
};
const updateById = async (title, content, id) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const searchBlogPostById = await getById(id);
  return { status: 'SUCCESSFUL', data: searchBlogPostById.data };
};
const deleteById = async (id) => {
  const deleteBlogPost = await BlogPost.destroy({
    where: { id } });

  return { status: 'DELETE', data: deleteBlogPost };
};

module.exports = {
  create, getAll, getById, updateById, deleteById };