const { connect } = require("mysql2");
const Sequelize = require("sequelize");

const connection = new Sequelize("guiacarreira", "root", "36852119@Zx", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = connection;
