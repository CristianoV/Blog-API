const { Op } = require('sequelize');
const { BlogPost, PostCategory } = require('../database/models');

const postService = {
  newPost: async ({ title, content, categoryIds }, userId) => {
    const newPost = await BlogPost.create({ title, content, userId });

    const categories = categoryIds.map((id) => ({
      postId: newPost.id,
      categoryId: id,
    }));

    await PostCategory.bulkCreate(categories);

    return newPost;
  },
  allPost: async () => {
    const posts = await BlogPost.findAll({
      include: [
        { all: true, nested: true, attributes: { exclude: ['password'] } },
      ],
    });

    return posts;
  },
  postById: async (id) => {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { all: true, nested: true, attributes: { exclude: ['password'] } },
      ],
    });
    return post;
  },
  editPost: async (id, newEditPost) => {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { all: true, nested: true, attributes: { exclude: ['password'] } },
      ],
    });
    await post.update(newEditPost);
    await post.save();
    return post;
  },
  deletePost: async (id) => {
    const post = await BlogPost.destroy({ where: { id } });

    return post;
  },
  postByTitle: async (q) => {
    const post = await BlogPost.findOne({
      where: {
        title: {
          [Op.like]: `%${q}%`,
        },
      },
      include: [
        { all: true, nested: true, attributes: { exclude: ['password'] } },
      ],
    });

    return post;
  },
  postByContent: async (q) => {
    const post = await BlogPost.findOne({
      where: {
        content: {
          [Op.like]: `%${q}%`,
        },
      },
      include: [
        { all: true, nested: true, attributes: { exclude: ['password'] } },
      ],
    });

    return post;
  },
};

module.exports = postService;
