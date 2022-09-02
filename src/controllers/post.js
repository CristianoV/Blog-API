const posts = require('../services/post');
const categories = require('../services/categories');
const usersService = require('../services/users');
const tokenHelper = require('../../helpers/tokenHelper');
const userLogin = require('../services/login');
const { newPostValidator } = require('../services/schemas');

const postController = {
  newPost: async (req, res) => {
    const { headers } = req;
    const { title, content, categoryIds } = req.body;
    
    await usersService.validToken(req);

    await userLogin.LoginError(newPostValidator, { title, content });

    await categories.validCategory(categoryIds);
    
    const { id } = tokenHelper.verifyToken(headers.authorization);

    const newPost = await posts.newPost({ title, content, categoryIds }, id);

    res.status(201).json(newPost);
  },
};

module.exports = postController;
