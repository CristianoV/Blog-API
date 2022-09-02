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
};

module.exports = postService;
