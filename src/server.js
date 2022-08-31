require('dotenv').config();
const app = require('./api');
const { validate } = require('./middleware/validate');

require('express-async-errors');
const loginController = require('./controllers/login');
const usersController = require('./controllers/users');
const categoriesController = require('./controllers/categories');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint

app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController.login);
app.get('/categories', validate, categoriesController.getCategories);
app.post('/categories', validate, categoriesController.newCategory);
app.get('/user', validate, usersController.getUsers);
app.get('/user/:id', validate, usersController.getUsersById);
app.post('/user', usersController.postUsers);

app.use('*', (req, res) => {
  res.status(404).send('<h1>404</h1>');
});

app.use((err, _req, res, _next) => {
  const { message } = err;

  return res.status(err.statusCode || 500).json({ message });
});

app.listen(port, () => console.log('ouvindo porta', port));
