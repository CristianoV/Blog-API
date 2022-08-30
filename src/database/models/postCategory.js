module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    modelName: 'PostCategories',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });

  // Character.associate = (models) => {
  //   Character.belongsTo(models.Job, {
  //     foreignKey: "jobId",
  //     as: "job"
  //   });
  // };

  return PostCategories;
};