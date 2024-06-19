module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      display_name: {
        type: DataTypes.STRING,
      },
      email: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
      {
        timestamps: false,
        tableName: 'users',
        underscored: false,
      });
  
    return User;
  };