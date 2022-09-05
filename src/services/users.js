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
  validUser: async (req) => {
    const { authorization: token } = req.headers;
    const { email } = tokenHelper.verifyToken(token);
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundError('User does not exist', 404);
    }
    return user;
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
  getUsersById: async (id) => {
    const result = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
    if (!result) {
      throw new NotFoundError('User does not exist', 404);
    }
    return { code: 200, data: result };
  }, 
  deleteUsers: async (id) => {
    const user = await User.destroy({ where: { id } });

    return user;
  },
};

module.exports = usersService;
