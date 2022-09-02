const joi = require('joi');

const REQUIRED = '400|Some required fields are missing';

const login = joi.object({
  email: joi.string().min(1).required().messages({
    'string.empty': REQUIRED,
    'any.required': REQUIRED,
  }),
  password: joi.string().required().messages({
    'string.empty': REQUIRED,
    'any.required': REQUIRED,
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

const newPostValidator = joi.object({
  title: joi.string().min(1).messages({
    'string.empty': REQUIRED,
    'any.required': REQUIRED,
  }),
  content: joi.string().min(1).required().messages({
    'string.empty': REQUIRED,
    'any.required': REQUIRED,
  }),
});

module.exports = { login, newUser, newPostValidator };
