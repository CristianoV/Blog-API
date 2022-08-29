require('dotenv').config();
require('express-async-errors');
const app = require('./api');

const usersController = require('./controllers/login');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint

app.get('/login', usersController.login);

app.use((err, _req, res, _next) => {
  const { message, statusCode } = err;
  return res.status(statusCode).json({ message });
});

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
