const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize({
  storage: "database.sqlite",
  dialect: "sqlite",
})

module.exports = {
  sequelize,
  DataTypes,
}
