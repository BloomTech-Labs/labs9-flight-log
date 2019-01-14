const express = require("express");
const router = express.Router();
const pilotsDb = require("../helpers/pilotsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const pilots = await pilotsDb.get();
    res.status(200).json(pilots);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the pilots" });
  }
});
//post route
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ error: "please input username" });
  }
  if (!password) {
    return res.status(400).json({ error: "please input password" });
  }
  try {
    const pilot = await pilotsDb.insert({ username, password });
    res.status(201).json(pilot);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating a pilot" });
  }
});
//put route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ error: "please input username" });
  }
  if (!password) {
    return res.status(400).json({ error: "please input password" });
  }
  try {
    const pilot = await pilotsDb.update(id, { username, password });
    if (!pilot) {
      res
        .status(404)
        .json({ error: "the pilot with the specified id does not exist" });
    }
    res.status(200).json({ username, password });
  } catch (error) {
    res.status(500).json({ error: "there was an error in updating the pilot" });
  }
});
//delete route
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const pilot = await pilotsDb.remove(id);
    if (!pilot) {
      res
        .status(404)
        .json({ error: "the pilot with the specified id does not exist" });
    }
    res.status(200).json({ message: "pilot deleted" });
  } catch (error) {
    res.status(500).json({ error: "there was an error deleting the pilot" });
  }
});
module.exports = router;
