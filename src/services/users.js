const { User } = require('../database/models');
const tokenHelper = require('../../helpers/tokenHelper');
const NotFoundError = require('../errors/NotFoundError');

const usersService = {
  validToken: async (req) => {
    const { authorization: token } = req.headers;
    try {
      const tokenCheck = tokenHelper.verifyToken(token);
      await User.findOne({ where: { email: tokenCheck.email } });
    } catch (error) {
      throw new NotFoundError('Expired or invalid token', 401);
    }
  },
  getUsers: async () => {
    const result = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return { code: 200, data: result };
  },
  getUsersByEmail: async (email) => {
    const result = await User.findOne({
      where: { email },
    });
    return result;
  },
  postUsers: async (user) => {
    const { id, displayName, email, image } = await User.create(user);
    const token = tokenHelper.createToken({ id, displayName, email, image });

    return { code: 201, data: { token } };
  },
};

module.exports = usersService;
