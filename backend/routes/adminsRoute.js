const express = require("express");
const router = express.Router();
const adminRoute = require("../helpers/pilotsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const admin = adminRoute.get();
    res.status(200).json(pilots);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the pilots" });
  }
});