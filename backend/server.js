//import express framework
const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

server.listen(9000, () => console.log("api running..."));
