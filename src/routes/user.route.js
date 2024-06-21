const route = require('express').Router();
const middleware = require('../middlewares/index');
const usersController = require('../controllers/Users.controller');
const usersController2 = require('../controllers/Users_2.controller');

route.post('', middleware.validateRegister, usersController.create);
route.get('', middleware.authorization, usersController.usersList);
route.get('/:id', middleware.authorization, usersController.findById);
route.delete('/me', middleware.authorization, usersController2.removeById);

module.exports = route;