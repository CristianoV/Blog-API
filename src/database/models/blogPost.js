module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    modelName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPost.associate = (models) => {
    // BlogPost.hasMany(models.BlogPost, {
    //   foreignKey: 'id',
    //   as: 'PostCategory'
    // });
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'Users',
    });
  };

  return BlogPost;
};