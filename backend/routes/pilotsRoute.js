const express = require("express");
const router = express.Router();
const pilotsDb = require("../helpers/pilotsDb");
const admin = require("../config/admin");

//get route
router.get("/", async (req, res) => {
  try {
    const pilots = await pilotsDb.get();
    res.status(200).json(pilots);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the pilots" });
  }
});
router.get("/signin", decode1, async (req, res) => {
  console.log("req", req);
  const UID = req.body.UID;
  try {
    const pilots = await pilotsDb.get().where("UID", UID);
    res.status(200).json(pilots);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the pilots" });
  }
});
//middleware
function decode(req, res, next) {
  // console.log("req", req);
  console.log("req.body", req.body);
  const token = req.body.token;
  admin
    .auth()
    .verifyIdToken(token)
    .then(decodedToken => {
      req.body.UID = decodedToken.uid;
      console.log(req.body.UID, "req.body.UID");
      next();
    });
}
function decode1(req, res, next) {
  console.log("req", req.query.token);
  const token = req.query.token;
  admin
    .auth()
    .verifyIdToken(token)
    .then(decodedToken => {
      req.body.UID = decodedToken.uid;
      next();
    });
}
//end middleware
//post route
router.post("/", decode, async (req, res) => {
  const { firstName, lastName } = req.body;
  const UID = req.body.UID;
  // const token= req.headers.token;
  // console.log(token, 'here is the token from front end')
  // let UID= '';
  // admin.auth().verifyIdToken(token)
  // .then((decodedToken)=>{
  //   UID= decodedToken.uid;
  //   console.log(UID, 'this is UID');
  //   return UID
  // console.log(UID, "decoded UID");
  // if (!firstName) {
  //   return res.status(400).json({ error: "please input firstName" });
  // }
  // if (!lastName) {
  //   return res.status(400).json({ error: "please input lastName" });
  // }
  try {
    const pilot = await pilotsDb.insert({ firstName, lastName, UID });
    res.status(201).json(pilot);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating a pilot" });
  }
});

//put route
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName } = req.body;
  if (!firstName) {
    return res.status(400).json({ error: "please input firstName" });
  }
  if (!lastName) {
    return res.status(400).json({ error: "please input lastName" });
  }
  try {
    const pilot = await pilotsDb.update(id, { firstName, lastName });
    if (!pilot) {
      res
        .status(404)
        .json({ error: "the pilot with the specified id does not exist" });
    }
    res.status(200).json({ firstName, lastName });
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
