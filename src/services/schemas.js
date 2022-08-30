const joi = require('joi');

const login = joi.object({
  email: joi.string().min(1).required().messages({
    'string.empty': '400|Some required fields are missing',
    'any.required': '400|Some required fields are missing',
  }),
  password: joi.string().required().messages({
    'string.empty': '400|Some required fields are missing',
    'any.required': '400|Some required fields are missing',
  }),
});

const newUser = joi.object({
  email: joi.string().email().min(1).messages({
    'string.email': '400|"email" must be a valid email',
  }),
  password: joi.string().min(6).required().messages({
    'string.min': '400|"password" length must be at least 6 characters long',
  }),
  displayName: joi.string().min(8).required().messages({
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
});

module.exports = { login, newUser };
