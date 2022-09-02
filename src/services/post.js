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
    const posts = await BlogPost.findOne({ where: { id },
include: [
      { all: true, nested: true, attributes: { exclude: ['password'] } },
    ] });
    return posts;
  },
};

// postService.postById(1);

module.exports = postService;
