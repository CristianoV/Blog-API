const userLogin = require('../services/login');
const { newUser } = require('../services/schemas');
const usersService = require('../services/users');

const usersController = {
  getUsers: async (req, res) => {
    const result = await usersService.getUsers();
    res.code(200).json(result);
  },
  postUsers: async (req, res) => {
    const { body } = req;
    const { email, password, displayName } = body;

    await userLogin.LoginError(newUser, { email, password, displayName });

    const emailValidate = await usersService.getUsersByEmail(body.email);

    if (emailValidate) return res.status(409).json({ message: 'User already registered' });

    const { code, data } = await usersService.postUsers(body);
    res.status(code).json(data);
  },
};

module.exports = usersController;
