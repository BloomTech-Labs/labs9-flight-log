//import express framework
const express = require("express");
const server = express();

//import routes
// const pilots = require("./routes/pilotsRoute");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

// server.use("/pilots", pilots);

server.listen(9000, () => console.log("api running..."));
