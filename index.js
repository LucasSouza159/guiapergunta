const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Fazendo a conexão com o banco de dados

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });
//Estou dizendo para o Express usar o EJS como View engine
app.set("views engine", "ejs");
app.use(express.static("public"));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  res.send = "Tudo certo por aqui";
});
app.post("/perguntar", (req, res) => {
  res.send = "Faça a sua pergunta";
});
//Servidor
app.listen(8080, () => {
  console.log("Servidor iniciado");
});
