const userLogin = require('../services/login');
const { login } = require('../services/schemas');

const userLoginController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    await userLogin.LoginError(login, { email, password });

    const result = await userLogin.login(email, password);

    if (!result) {
      return res.status(400).json({
        message: 'Invalid fields',
      });
    }
    res.status(200).json(result);
  },
};

module.exports = userLoginController;
