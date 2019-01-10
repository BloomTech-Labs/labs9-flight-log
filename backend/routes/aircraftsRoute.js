const express = require("express");
const router = express.Router();
const aircraftsRoute = require("../helpers/aircraftsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const aircrafts = aircraftsRoute.get();
    res.status(200).json(aircrafts);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the aircraft" });
  }
});