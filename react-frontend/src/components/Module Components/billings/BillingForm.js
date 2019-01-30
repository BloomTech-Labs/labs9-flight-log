import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Button from "@material-ui/core/Button";
import RadioButtonsGroup from "./RadioButtonsGroup"
import axios from "axios";

class BillingForm extends Component {
  constructor(props) {
    super(props);

    this.state = { complete: false, value: "", isPaid: false};
    this.submit = this.submit.bind(this);
  }

  setAmount = ev => {
    console.log("setAmount", ev.target.value);
    this.setState({ value: ev.target.value});
    };

  async submit(ev) {

    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let amount = await this.state.value;

    let response = await fetch(
      "https://labs9-flight-log.herokuapp.com/charge",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token.id, amount })
      }
    );

    if (response.ok) {
      this.setState({ complete: true});
      const UID = localStorage.getItem('userID');
      console.log(UID);
      //console.log('isPaid status:', {isPaid});

      axios
        .post(`https://labs9-flight-log.herokuapp.com/pilots/${UID}`)
        .then(response => {
          this.setState({ isPaid: true})
          //console.log('isPaid post status:', {isPaid})
        })
        .catch(error => console.log(error));
        console.log("Purchase Complete!");
    } 
   
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete!</h1>;

    return (
      <div className="checkout">
        <CardElement />
        <p>Please select your preferred subscription:</p>

        <RadioButtonsGroup/>

        <Button
          variant="contained"
          color="primary"
          onClick={this.submit}
        >
          Buy Now
        </Button>

      </div>
    );
  }
}

export default injectStripe(BillingForm);

/* <div onChange={this.setAmount}>
<input type="radio" id="year" name="sub" value="1999" />
<label htmlFor="1999">$19.99 for 1 year</label>

<input type="radio" id="month" name="sub" value="999" />
<label htmlFor="999">$9.99 for 1 month</label>
</div> */
