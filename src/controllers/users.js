const userLogin = require('../services/login');
const { newUser } = require('../services/schemas');
const usersService = require('../services/users');

const usersController = {
  getUsers: async (req, res) => {
    await usersService.validToken(req);
    const { code, data } = await usersService.getUsers();
    res.status(code).json(data);
  },
  postUsers: async (req, res) => {
    const { body } = req;
    const { email, password, displayName } = body;

    await userLogin.LoginError(newUser, { email, password, displayName });

    const emailValidate = await usersService.getUsersByEmail(body.email);

    if (emailValidate) { return res.status(409).json({ message: 'User already registered' }); }

    const { code, data } = await usersService.postUsers(body);
    res.status(code).json(data);
  },
  getUsersById: async (req, res) => {
    const { id } = req.params;
    await usersService.validToken(req);
    const { code, data } = await usersService.getUsersById(id);
    res.status(code).json(data);
  },
  deleteUser: async (req, res) => {
    await usersService.validToken(req);

    const { id } = await usersService.validUser(req);

    await usersService.deleteUsers(id);

    return res.status(204).json();
  },
};

module.exports = usersController;
