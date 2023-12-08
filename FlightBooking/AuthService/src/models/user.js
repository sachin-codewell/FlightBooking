'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');

const {ServerConfig} = require('../config/index')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:DataTypes.STRING,
      allowNull :false,
      unique:true
    },
    password: {
      type:DataTypes.STRING,
      allowNull :false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    const hashedPassword = bcrypt.hashSync(user.password, ServerConfig.SALT);
    user.password = hashedPassword;
  });
  return User;
};



