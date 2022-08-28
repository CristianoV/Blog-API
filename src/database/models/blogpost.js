module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPosts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    modelName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  // BlogPost.associate = (models) => {
  //   BlogPost.belongsTo(models.User, {
  //     foreignKey: 'userId',
  //     as: 'Users',
  //   });
  // };

  return BlogPost;
};