const express = require("express");
const router = express.Router();
const flightsRoute = require("../helpers/flightsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const flights = flightsRoute.get();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the flights" });
  }
});