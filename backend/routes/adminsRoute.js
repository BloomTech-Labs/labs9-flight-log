const express = require("express");
const router = express.Router();
const adminsDb = require("../helpers/adminsDb");

//get route
router.get("/", async (req, res) => {
  try {
    const admins = await adminsDb.get();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the admins" });
  }
});
//post route
router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName) {
    return res.status(400).json({ error: "please input first name" });
  }
  if (!lastName) {
    return res.status(400).json({ error: "please input last name" });
  }
  try {
    const admin = await adminsDb.insert({ firstName, lastName });
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating an admin" });
  }
});
//put route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName } = req.body;
  if (!firstName) {
    return res.status(400).json({ error: "please input first name" });
  }
  if (!lastName) {
    return res.status(400).json({ error: "please input last name" });
  }
  try {
    const admin = await adminsDb.update(id, { firstName, lastName });
    if (!admin) {
      res
        .status(400)
        .json({ error: "the admin with the specified id does not exist" });
    }
    res.status(200).json({ firstName, lastName });
  } catch (error) {
    res.status(500).json({ error: "there was an error in updating the admin" });
  }
});
//delete route
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const admin = await adminsDb.remove(id);
    if (!admin) {
      res
        .status(400)
        .json({ error: "the admin with the specified id does not exist" });
    }
    res.status(200).json({ message: "admin deleted" });
  } catch (error) {
    res.status(500).json({ error: "there was an error deleting the admin" });
  }
});
module.exports = router;
