const validate = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  next();
};

module.exports = { validate };
