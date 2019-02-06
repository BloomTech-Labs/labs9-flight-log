require("dotenv").config();

const express = require("express");
const server = express();
const cors = require("cors");

const stripe = require("stripe")(process.env.SAPIKEY);//billing

//import routes
const admins = require("./routes/adminsRoute");
const pilots = require("./routes/pilotsRoute");
const airplanes = require("./routes/airplanesRoute");
const instructors = require("./routes/instructorsRoute");
const flights = require("./routes/flightsRoute");

const port = process.env.PORT || 9000;


server.use(express.json());
server.use(cors());
server.use(require("body-parser").text()); //billing

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

//BILLING
server.post("/charge", async (req, res) => {

  console.log('@@@token@@@', req.body.token)
  console.log('appPost-req.amount', req.body.amount)
  if(req.body.amount === "1999") {
    
    try {
      let {status} = await stripe.charges.create({
        amount: 1999,
        currency: "usd",
        description: "yearly purchase",
        source: req.body.token
      });
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }    
  } else {
    try {
      let {status} = await stripe.charges.create({
        amount: 999,
        currency: "usd",
        description: "monthly purchase",
        source: req.body.token
      });
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }    
  }
});//server.post end brackets

server.listen(port, () => console.log(`api running on ${port}...`));

//needed for tests
module.exports = { server };
