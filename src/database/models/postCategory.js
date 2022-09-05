module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: DataTypes.INTEGER,
    },
    {
      modelName: 'PostCategories',
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategories;
};
