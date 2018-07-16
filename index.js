var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var auth = require("./auth.js")();
var users = require("./users.js");
server.use(bodyParser.json());
server.use(auth.initialize());

server.get('/', (req, res) => {
    res.send({ mensagem: "Hello World" });
});

server.get("/user", auth.authenticate(), function(req, res) {
    res.send({ mensagem: "Acesso liberado" });
});

server.listen(3000, () => {
    console.log("Servidor em pé");
});