const route = require('express').Router();
const middleware = require('../middlewares/index');
const catagoriesController = require('../controllers/Catagories.controller');

route.post('', middleware.authorization, middleware.validateName, catagoriesController.register);
route.get('', middleware.authorization, catagoriesController.categoriesList);

module.exports = route;