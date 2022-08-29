const { User } = require('../database/models');
const { validator } = require('./validator');
const NotFoundError = require('../errors/NotFoundError');
const tokenHelper = require('../../helpers/tokenHelper');

const userLogin = {
  LoginError: async (schema, validate) => {
    const error = validator(schema, validate);
    if (error) {
      const { data, code } = error;
      throw new NotFoundError(data, code);
    }
  },
  login: async (mail, password) => {
    const result = await User.findOne({
      where: { email: mail, password },
    });

    if (result) {
    const { id, displayName, email, image } = result;

    const token = tokenHelper.createToken({ id, displayName, email, image });

    return token;
    }
  },
};

module.exports = userLogin;
