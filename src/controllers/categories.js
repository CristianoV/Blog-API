const categoriesServices = require('../services/categories');
const usersService = require('../services/users');

const categoriesController = {
    newCategory: async (req, res) => {
        const { name } = req.body;
        if (!name) { return res.status(400).json({ message: '"name" is required' }); }
        await usersService.validToken(req);
        const { code, data } = await categoriesServices.newCategory(name);

        res.status(code).json(data);
    },
    getCategories: async (req, res) => {
        await usersService.validToken(req);
        const { code, data } = await categoriesServices.getCategories();

        res.status(code).json(data);
    },
};

module.exports = categoriesController;