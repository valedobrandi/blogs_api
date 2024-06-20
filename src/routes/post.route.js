const route = require('express').Router();
const middleware = require('../middlewares/index');
const blogPostController = require('../controllers/BlogPost.controller');

route.post(
  '', 
  middleware.validateBlogPostField,
  middleware.authorization,
  blogPostController.create,
);

route.get('', middleware.authorization, blogPostController.searchAll);

module.exports = route;