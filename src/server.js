require('dotenv').config();
const app = require('./api');

require('express-async-errors');
const loginController = require('./controllers/login');
const usersController = require('./controllers/users');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint

app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController.login);
app.post('/user', usersController.postUsers);

app.use('*', (req, res) => {
  res.status(404).send('<h1>404</h1>');
});

app.use((err, _req, res, _next) => {
  const { message } = err;

  return res.status(err.statusCode || 500).json({ message });
});

app.listen(port, () => console.log('ouvindo porta', port));
