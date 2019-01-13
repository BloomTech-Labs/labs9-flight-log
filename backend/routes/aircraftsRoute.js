const express = require("express");
const router = express.Router();
const aircraftsDb = require("../helpers/aircraftsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const aircrafts = await aircraftsDb.get();
    res.status(200).json(aircrafts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the aircrafts" });
  }
});
//post route
router.post("/", async (req, res) => {
  const { make, model, tailNumber } = req.body;
  if (!tailNumber) {
    return res.status(400).json({ error: "please input tail number" });
  }
  if (!make) {
    return res.status(400).json({ error: "please input make" });
  }
  if (!model) {
    return res.status(400).json({ error: "please input model" });
  }
  try {
    const aircraft = await aircraftsDb.insert({ make, model, tailNumber });
    res.status(201).json(aircraft);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating the aircraft" });
  }
});
//put route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { make, model, tailNumber } = req.body;
  if (!tailNumber) {
    return res.status(400).json({ error: "please input tail number" });
  }
  if (!make) {
    return res.status(400).json({ error: "please input make" });
  }
  if (!model) {
    return res.status(400).json({ error: "please input model" });
  }
  try {
    const aircraft = await aircraftsDb.update(id, { make, model, tailNumber });
    if (!aircraft) {
      res
        .status(400)
        .json({ error: "the aircraft with the specified id does not exist" });
    }
    res.status(200).json({ make, model, tailNumber });
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error in updating the aircraft" });
  }
});
//delete route
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const aircraft = await aircraftsDb.remove(id);
    if (!aircraft) {
      res
        .status(404)
        .json({ error: "the aircraft with the specified id does not exist" });
    }
    res.status(200).json({ message: "aircraft deleted" });
  } catch (error) {
    res.status(500).json({ error: "there was an error deleting the aircraft" });
  }
});
module.exports = router;
