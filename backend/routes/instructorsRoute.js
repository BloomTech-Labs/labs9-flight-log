const express = require("express");
const router = express.Router();
const instructorsDb = require("../helpers/instructorsDb");

//get route
// router.get("/", async (req, res) => {
//   try {
//     const instructors = await instructorsDb.get();
//     res.status(200).json(instructors);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "there was an error retrieving the instructors" });
//   }
// });
router.get("/:UID", async (req, res) => {
  try {
    console.log("req.params.id", req.params.UID);
    const instructors = await instructorsDb.get(req.params.UID);
    res.status(200).json(instructors);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the instructors" });
  }
});
router.get("/:UID/:id", async (req, res) => {
  try {
    const instructor = await instructorsDb.get(req.params.UID, req.params.id);
    res.status(200).json(instructor);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the instructor" });
  }
});
//post route
router.post("/", async (req, res) => {
  const { name, licenseNum, contactInfo, ratings, notes } = req.body;
  if (!name) {
    return res.status(400).json({ error: "please input instructor's name" });
  }
  if (!licenseNum) {
    return res
      .status(400)
      .json({ error: "please input instructor's license number" });
  }
  if (!contactInfo) {
    return res
      .status(400)
      .json({ error: "please input instructor's contact info" });
  }
  try {
    const instructor = await instructorsDb.insert(req.body);
    res.status(201).json(instructor);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error creating an instructor" });
  }
});
//put route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, licenseNum, contactInfo, ratings, notes } = req.body;
  if (!name) {
    return res.status(400).json({ error: "please input instructor's name" });
  }
  if (!licenseNum) {
    return res
      .status(400)
      .json({ error: "please input instructor's license number" });
  }
  if (!contactInfo) {
    return res
      .status(400)
      .json({ error: "please input instructor's contact info" });
  }
  try {
    const instructor = await instructorsDb.update(id, req.body);
    if (!instructor) {
      res
        .status(404)
        .json({ error: "the instructor with the specified id does not exist" });
    }
    res.status(200).json(req.body);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error in updating the instructor" });
  }
});
//delete route
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const instructor = await instructorsDb.remove(id);
    if (!instructor) {
      res
        .status(404)
        .json({ error: "the instructor with the specified id does not exist" });
    }
    res.status(200).json({ message: "instructor deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error deleting the instructor" });
  }
});
module.exports = router;
