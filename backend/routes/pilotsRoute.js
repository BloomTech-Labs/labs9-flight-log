const express = require("express");
const router = express.Router();
const pilotsDb = require("../helpers/pilotsDb");
const admin = require('../config/admin');


//get route
router.get("/", async (req, res) => {
  const token= req.token;
  try {
    const pilots = await pilotsDb.get();
    res.status(200).json(pilots);
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the pilots" });
  }
});
//post route
router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName) {
    return res.status(400).json({ error: "please input firstName" });
  }
  if (!lastName) {
    return res.status(400).json({ error: "please input lastName" });
  }
  try {
    const pilot = await pilotsDb.insert({ firstName, lastName });
    res.status(201).json(pilot);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating a pilot" });
  }
});
decoder= (req, res, next)=>{
  const token= req.header;
  admin.auth().verifyIdToken(token)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    
  }).catch(function(error) {
    // Handle error
  });
}

router.post('/', async(req, res)=>{
  const token= req.header;
  admin.auth().verifyIdToken(token)
  .then((decodedToken)=>{
    const UID= decodedToken.uid;
    const firstName='test';
    const lastName='test';
    const isPaid=true;
    pilotsDb.insert({firstName, lastName, isPaid, UID})
  })
  

})
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
