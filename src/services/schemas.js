const joi = require('joi');

const login = joi.object({
    email: joi.string().required().messages({
        'any.required': '400|Some required fields are missing',
    }),
    password: joi.string().min(5).required().messages({
      'string.min': '422|"name" length must be at least 5 characters long',
      'any.required': '400|Some required fields are missing',
    }),
  });

module.exports = { login };
