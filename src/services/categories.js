const { Category } = require('../database/models');
// const { validator } = require('./validator');
const NotFoundError = require('../errors/NotFoundError');
// const tokenHelper = require('../../helpers/tokenHelper');

const categoriesService = {
  allCategories: async () => {
    const categories = await Category.findAll();
    return categories;
  },
  validCategory: async (categoryIds) => {
    const allCategories = await categoriesService.allCategories();

    const newPostCategorys = allCategories.map(({ id }) => id);

    const check = categoryIds.every((id) => newPostCategorys.includes(id));

    if (!check) {
      console.log('xablau');
      throw new NotFoundError('"categoryIds" not found', 400);
    }
  },
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
