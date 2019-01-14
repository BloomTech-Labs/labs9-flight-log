const express = require("express");
const server = express();

//import routes
const admins = require("./routes/adminsRoute");
const pilots = require("./routes/pilotsRoute");
const aircrafts = require("./routes/aircraftsRoute");
const instructors = require("./routes/instructorsRoute");
const flights = require("./routes/flightsRoute");

// const db = require("./dbConfig");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

// server.get("/pilots", (req, res) => {
//   db("pilots").then(pilots => {
//     res.status(200).json("hello");
//   });
// });
server.use("/admins", admins);
server.use("/pilots", pilots);
server.use("/aircrafts", aircrafts);
server.use("/instructors", instructors);
server.use("/flights", flights);

server.listen(9000, () => console.log("api running..."));

//needed for tests
module.exports = { server };
