const express = require("express");
const router = express.Router();
const airplanesDb = require("../helpers/airplanesDb");

//get route
// router.get("/", async (req, res) => {
//   try {
//     const airplanes = await airplanesDb.get();
//     res.status(200).json(airplanes);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "there was an error retrieving the airplanes" });
//   }
// });
router.get("/:UID", async (req, res) => {
  try {
    console.log("req.params.id", req.params.UID);
    const airplanes = await airplanesDb.get(req.params.UID);
    res.status(200).json(airplanes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the airplanes" });
  }
});
router.get("/:UID/:id", async (req, res) => {
  try {
    console.log("req.params", req.params);
    const airplane = await airplanesDb.get(req.params.UID, req.params.id);
    res.status(200).json(airplane);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the airplane" });
  }
});
//post route
router.post("/", async (req, res) => {
  console.log("req.body", req.body);
  const { make, model, tailNumber, category } = req.body;
  if (!tailNumber) {
    return res.status(400).json({ error: "please input tail number" });
  }
  if (!make) {
    return res.status(400).json({ error: "please input make" });
  }
  if (!model) {
    return res.status(400).json({ error: "please input model" });
  }
  if (!category) {
    return res.status(400).json({ error: "please input category" });
  }
  try {
    const airplane = await airplanesDb.insert(req.body);
    res.status(201).json(airplane);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating the airplane" });
  }
});
//put route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  // const { make, model, tailNumber, category } = req.body;
  if (!req.body.tailNumber) {
    return res.status(400).json({ error: "please input tail number" });
  }
  if (!req.body.make) {
    return res.status(400).json({ error: "please input make" });
  }
  if (!req.body.model) {
    return res.status(400).json({ error: "please input model" });
  }
  if (!req.body.category) {
    return res.status(400).json({ error: "please input category" });
  }
  try {
    const airplane = await airplanesDb.update(id, req.body);
    if (!airplane) {
      res
        .status(400)
        .json({ error: "the airplane with the specified id does not exist" });
    }
    res.status(200).json(req.body);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error in updating the airplane" });
  }
});
//delete route
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const airplane = await airplanesDb.remove(id);
    if (!airplane) {
      res
        .status(404)
        .json({ error: "the airplane with the specified id does not exist" });
    }
    res.status(200).json({ message: "airplane deleted" });
  } catch (error) {
    res.status(500).json({ error: "there was an error deleting the airplane" });
  }
});
module.exports = router;
