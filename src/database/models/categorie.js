module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Categories", {
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
  return Users;
};