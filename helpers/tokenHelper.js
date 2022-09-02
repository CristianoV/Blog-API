const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

// const JWT_SECRET = 'batatinha';
const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '120min' };

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  const dados = jwt.verify(token, JWT_SECRET);
  return dados;
};

module.exports = { createToken, verifyToken };