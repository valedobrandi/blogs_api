const route = require('express').Router();
const middleware = require('../middlewares/index');
const usersController = require('../controllers/Users.controller');

route.post('', middleware.validateRegister, usersController.create);
route.get('', middleware.authorization, usersController.usersList);

module.exports = route;