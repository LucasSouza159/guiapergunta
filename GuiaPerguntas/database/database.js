const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "36852119@Zx", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = connection;
