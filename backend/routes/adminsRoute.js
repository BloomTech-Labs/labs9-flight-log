const express = require("express");
const router = express.Router();
const adminsRoute = require("../helpers/adminsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const admins = adminsRoute.get();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the admins" });
  }
});