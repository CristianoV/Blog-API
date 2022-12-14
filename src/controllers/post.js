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
  allPost: async (req, res) => {
    await usersService.validToken(req);
    const allPosts = await posts.allPost();

    res.status(200).json(allPosts);
  },
  postById: async (req, res) => {
    const { id } = req.params;

    await usersService.validToken(req);
    const post = await posts.postById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(post);
  },
  editPost: async (req, res) => {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { title, content } = req.body;

    await userLogin.LoginError(newPostValidator, { title, content });
    await usersService.validToken(req);
    const validation = tokenHelper.verifyToken(authorization);
    const postAfterEdit = await posts.postById(id);

    if (validation.id !== postAfterEdit.userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    const newEditPosts = await posts.editPost(id, req.body);

    if (!newEditPosts) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(newEditPosts);
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    await usersService.validToken(req);

    const valid = await usersService.validUser(req);

    const post = await posts.postById(id); 

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    if (valid.id !== post.userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    await posts.deletePost(id);

    return res.status(204).json();
  },
  postByQuery: async (req, res) => {
    const { q } = req.query;

    await usersService.validToken(req);

    if (!q) {
      const all = await posts.allPost();
      return res.status(200).json(all);
    }
    const title = await posts.postByTitle(q);
    if (title) return res.status(200).json([title]);

    const content = await posts.postByContent(q);
    if (content) return res.status(200).json([content]);

    return res.status(200).json([]);
  },
};

module.exports = postController;
