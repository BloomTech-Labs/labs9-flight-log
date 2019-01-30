import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../Module Components/billings/BillingForm";
import Layout from "../Header component/Layout";
// import TotalsModal from "./TotalsModal"; Moved to Layout AppBar

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: this.props.uid,
    }
  }

  render(props) {
    return (
      <Layout>
        <StripeProvider apiKey="pk_test_8ORBm2Wl7klSkjJI4PtWHT5Q">
          <div className="example">
            <h1>Billing</h1>
            <Elements>
              <BillingForm {...props}/>
            </Elements>
          </div>
        </StripeProvider>
      </Layout>
    );
  }
}

export default Billing;
