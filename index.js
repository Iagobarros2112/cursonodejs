//primeira conexao de dados usando json node js
// 
const express = require("express");

const server = express();

server.get("/hello", (req, res) => {
    return res.json({
        title : "hello world",
        message: "oi meu amigo iago"
    });
});

server.listen(3000);