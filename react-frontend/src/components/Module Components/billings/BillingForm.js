import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Button from "@material-ui/core/Button";
import axios from "axios";
import RadioButtonsGroup from "./RadioButtonsGroup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";



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
      <div>
      <Paper>
        <Typography
          variant="h5">Payment Info</Typography>
        <CardElement />
        <RadioButtonsGroup/>
        <Button
          variant="contained"
          color="primary"
          onClick={this.submit}
        >Buy Now</Button>
      </Paper>
      </div>
    );
  }
}

export default injectStripe(BillingForm);
