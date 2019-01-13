const express = require("express");
const router = express.Router();
const flightsDb = require("../helpers/flightsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const flights = await flightsDb.get();
    res.status(200).json(flights);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the flights" });
  }
});
//post route
router.post("/", async (req, res) => {
  if (!req.body.flightName) {
    return res.status(400).json({ error: "please input flight name" });
  }
  try {
    const flight = await flightsDb.insert(req.body);
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating a flight" });
  }
});
module.exports = router;
