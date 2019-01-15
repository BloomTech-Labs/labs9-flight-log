import React, {Component} from 'react';
import Layout from "../components/Layout";
import BillingForm from "../components/BillingForm"


export default class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ccard: "",
      expdate: "",
      cvv: "",
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //handleSubmit

  render() {
    return (
      <Layout>
        <div>
          <BillingForm changeHandler={this.changeHandler} />
        </div>
    </Layout>
    );
  }
}
