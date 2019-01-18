require("dotenv").config();

const app = require("express")();
const stripe = require("stripe")(process.env.SAPIKEY);
const cors = require('cors')

const port = process.env.PORT || 8000;

app.use(cors());
app.use(require("body-parser").text());

server.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

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

app.listen(port, () => console.log(`Listening on port ${port}`));

//to run: node billingserver.js