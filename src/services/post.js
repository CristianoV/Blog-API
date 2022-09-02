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
};

module.exports = postService;
