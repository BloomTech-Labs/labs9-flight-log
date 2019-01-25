import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
// import axios from 'axios';

class BillingForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {complete: false, value:""}
    this.submit = this.submit.bind(this)

  }

  setAmount = (ev) => {

    console.log('setAmount', ev.target.value);
    this.setState({value: ev.target.value})
  }

  //https://labs9-flight-log.herokuapp.com
  //http://localhost:8000
  
  async submit(ev) {
    // User clicked submit
    
/*     
    let body = {
      //amount:this.state.value, 
      token: await this.props.stripe.createToken({name: "Name"})
      }
    
    await axios
      .post('http://localhost:8000/charge', body)
      .then(res => {
        console.log("SUCCESS")
      })
      .catch(error => console.log(error)) */
      
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let amount = await this.state.value

    let response = await fetch("https://labs9-flight-log.herokuapp.com/charge", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      //application/json
      //text/plain
      body: JSON.stringify({token:token.id, amount})
      //amount: amount
    });

    if (response.ok) this.setState({complete:true})
    console.log("Purchase Complete!")

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete!</h1>;

    return (
      <div className="checkout">     
        <CardElement />
        <p>Please select your preferred subscription:</p>
        <div onChange={this.setAmount}>
          <input type="radio" id="year" 
                  name="sub" value="1999"/>
          <label htmlFor="1999">$19.99 for 1 year</label>

          <input type="radio" id="month" 
                  name="sub" value="999"/>
          <label htmlFor="999">$9.99 for 1 month</label>        
        </div>
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(BillingForm);
//export default injectStripe(CheckoutForm);