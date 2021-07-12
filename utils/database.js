const { Sequelize, DataTypes } = require("sequelize");
const ManufactModel = require("../models/manufact");
const ItemModel = require("../models/item");

const sequelize = new Sequelize(
  process.env.MY_SQL_DATABASE,
  process.env.MY_SQL_USER,
  process.env.MY_SQL_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.MY_SQL_HOST,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      iddle: 10000,
    },
  }
);

const manufact = ManufactModel(sequelize, DataTypes);
const item = ItemModel(sequelize, DataTypes);

module.exports = { sequelize, manufact, item };
