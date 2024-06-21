const route = require('express').Router();
const middleware = require('../middlewares/index');
const blogPostController = require('../controllers/BlogPost.controller');
const blogPostTwoController = require('../controllers/BlogPost_2.controller');

route.get(
  '/search', 
  middleware.authorization,
  blogPostTwoController.findByQuery,
);

route.post(
  '', 
  middleware.validateBlogPostField,
  middleware.authorization,
  blogPostController.create,
);

route.get('', middleware.authorization, blogPostController.searchAll);
route.get('/:id', middleware.authorization, blogPostController.searchById);
route.put(
  '/:id', 
  middleware.authorization, 
  middleware.validadeUpdateBlogPost, 
  blogPostController.updateById,
);
route.delete(
  '/:id', 
  middleware.authorization, 
  blogPostTwoController.deleteById,
);

module.exports = route;