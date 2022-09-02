require('dotenv').config();
const app = require('./api');
const { validate } = require('./middleware/validate');
const { categories, login, post, user } = require('./controllers');

require('express-async-errors');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint

app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', login.login);
app.post('/post', validate, post.newPost);
app.get('/post', validate, post.allPost);
app.get('/post/:id', validate, post.postById);
app.get('/categories', validate, categories.getCategories);
app.post('/categories', validate, categories.newCategory);
app.get('/user', validate, user.getUsers);
app.get('/user/:id', validate, user.getUsersById);
app.post('/user', user.postUsers);

app.use('*', (req, res) => {
  res.status(404).send('<h1>404</h1>');
});

app.use((err, _req, res, _next) => {
  const { message } = err;

  return res.status(err.statusCode || 500).json({ message });
});

app.listen(port, () => console.log('ouvindo porta', port));
