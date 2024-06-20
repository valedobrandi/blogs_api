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
route.get('/:id', middleware.authorization, blogPostController.searchById);

module.exports = route;