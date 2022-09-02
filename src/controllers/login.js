const userLogin = require('../services/login');
const { login } = require('../services/schemas');

const userLoginController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    await userLogin.LoginError(login, { email, password });

    const { code, data } = await userLogin.login(email, password);
    
    res.status(code).json(data);
  },
};

module.exports = userLoginController;
