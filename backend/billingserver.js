require("dotenv").config();

const app = require("express")();
const stripe = require("stripe")(process.env.SAPIKEY);
const cors = require('cors')

const port = process.env.PORT || 8000;

app.use(cors());
app.use(require("body-parser").text());

app.get("/", (req, res) => {
  res.send("<h1>Billing Server running</h1>");
});

app.post("/charge", async (req, res) => {
  console.log('@@BILLING SERVER@@@', req.body)
  if(req.purchase === "1999") {
    try {
      let {status} = await stripe.charges.create({
        amount: 1999,
        currency: "usd",
        description: "yearly subscription",
        source: req.body
      });
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }    
  } else {
    try {
      let {status} = await stripe.charges.create({
        amount: 999,
        currency: "usd",
        description: "monthly subscription",
        source: req.body
      });
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }    
  }

});

app.listen(port, () => console.log(`Listening on port ${port}`));

//to run: node billingserver.js