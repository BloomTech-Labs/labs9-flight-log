const express = require("express");
const server = express();

//import routes
const pilots = require("./routes/pilotsRoute");

const db = require('./dbConfig')

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

server.get("/pilots", (req,res)=> {
  db('pilots')
  .then(pilots=> {
    res.status(200).json(pilots)
  })
})

// server.use("/pilots", pilots);

server.listen(9000, () => console.log("api running..."));