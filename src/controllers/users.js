const usersService = require('../services/users');

const usersController = {
    getUsers: async (req, res) => {
        const result = await usersService.getUsers();
        res.code(200).json(result);
    },
};

module.exports = usersController;