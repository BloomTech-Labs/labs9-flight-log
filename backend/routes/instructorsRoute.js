const express = require("express");
const router = express.Router();
const instructorsRoute = require("../helpers/instructorsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const instructors = instructorsRoute.get();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the instructors" });
  }
});