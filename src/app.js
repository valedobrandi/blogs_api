const express = require('express');
const middlewares = require('./middlewares/validateLogin');
const usersController = require('./controllers/Users.controller');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', middlewares.validateLogin, usersController.login);

// ...
app.use((error, _rea, res, _next) => {
  const status = error.status || 500;
  console.log({ message: error.message });
  res.status(status).json({ message: 'Internal Service Error' });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
