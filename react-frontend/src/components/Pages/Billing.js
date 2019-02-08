import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../ModuleComponents/billings/BillingForm";
import Layout from "../HeaderComponents/Layout";
import { withStyles } from "@material-ui/core";
// import TotalsModal from "./TotalsModal"; Moved to Layout AppBar

const styles = theme => ({
  root: {
    marginTop: 15,
    maxWidth: 350
  }
});

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: this.props.uid
    };
  }

  render(props) {
    // const { classes } = this.props;
    const { classes, headerIsHidden, ...other } = this.props;

    return (
      <Layout UID={this.props.UID}>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
          {/* <div className={classes.root}> */}
          <Elements>
            <BillingForm {...other} id={this.props.id} />
          </Elements>
          {/* </div> */}
        </StripeProvider>
      </Layout>
    );
  }
}

export default withStyles(styles)(Billing);
