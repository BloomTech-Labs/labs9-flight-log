import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/BillingForm';
import Layout from "../components/Layout";

class Billing extends Component {
  render() {
    return (
      <div>Billing Page</div>
    );
  }
}

export default Billing;

/* <Layout>
<StripeProvider apiKey="pk_test_8ORBm2Wl7klSkjJI4PtWHT5Q">
  <div className="example">
    <h1>React Stripe Elements Example</h1>
    <Elements>
      <CheckoutForm />
    </Elements>
  </div>
</StripeProvider>
</Layout> */