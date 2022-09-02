module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    modelName: 'Categories',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });

  // Users.associate = (models) => {
  //   Users.hasMany(models.BlogPost, {
  //     foreignKey: 'id',
  //     as: 'PostCategory'
  //   });
  // };

  return Category;
};