const { Category } = require('../database/models');
// const { validator } = require('./validator');
// const NotFoundError = require('../errors/NotFoundError');
// const tokenHelper = require('../../helpers/tokenHelper');

const categoriesService = {
    newCategory: async (name) => {
        await Category.create({ name });
        return { code: 201, data: { name } };
    },
    getCategories: async () => {
        const categories = await Category.findAll();
        return { code: 200, data: categories };
    },
};

module.exports = categoriesService;