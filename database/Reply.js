const Sequelize = require("sequelize");
const connection = require("./database");

const Reply = connection.create("reply", {
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Reply.sync({ force: false });
module.exports = Reply;
