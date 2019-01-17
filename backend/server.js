const express = require("express");
const server = express();

//import routes
const admins = require("./routes/adminsRoute");
const pilots = require("./routes/pilotsRoute");
const airplanes = require("./routes/airplanesRoute");
const instructors = require("./routes/instructorsRoute");
const flights = require("./routes/flightsRoute");

const port = process.env.PORT || 9000;

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
server.use("/airplanes", airplanes);
server.use("/instructors", instructors);
server.use("/flights", flights);

server.listen(port, () => console.log(`api running on ${port}...`));

//needed for tests
module.exports = { server };
