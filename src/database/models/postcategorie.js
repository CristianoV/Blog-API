module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("PostCategories", {
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

  return Users;
};