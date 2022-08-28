module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'Users',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });

  // User.associate = (models) => {Users
  //   User.hasMany(models.blogpost, {
  //     foreignKey: 'id',
  //     as: 'BlogPosts'
  //   });
  // };

  return User;
};