const { User } = require('../database/models');
const tokenHelper = require('../../helpers/tokenHelper');

const usersService = {
  getUsers: async () => {
    const result = await User.findAll();
    console.log(result);
    return result;
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
