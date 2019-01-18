require("dotenv").config();

const app = require("express")();
const stripe = require("stripe")(process.env.SAPIKEY);
const cors = require('cors')

app.use(cors());
app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  console.log(req.body)
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.listen(8000, () => console.log("Listening on port 8000"));

//to run: node billingserver.js