import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../Module Components/billings/BillingForm";
import Layout from "../Header component/Layout";
import { withStyles } from "@material-ui/core";
// import TotalsModal from "./TotalsModal"; Moved to Layout AppBar

const styles = theme => ({
  root: {
    marginTop: 50,
    maxWidth: 300,
  },
});


class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: this.props.uid,
    }
  }

  render(props) {
    const {classes} = this.props;

    return (
      <Layout>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
          <div className={classes.root}>
            <Elements>
              <BillingForm {...props}/>
            </Elements>
          </div>
        </StripeProvider>
      </Layout>
    );
  }
}

export default withStyles(styles)(Billing);
