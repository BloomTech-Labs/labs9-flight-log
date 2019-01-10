const express = require("express");
const router = express.Router();
const pilotsRoute = require("../helpers/pilotsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const pilots = pilotsRoute.get();
    res.status(200).json(pilots);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the pilots" });
  }
});