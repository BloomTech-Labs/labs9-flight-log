const app = require("express")();
const stripe = require("stripe")("sk_test_1rHlJ5Sv61Op6sGunV9pPA3u");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"));

//to run: node billingserver.js