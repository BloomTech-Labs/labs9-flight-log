import Layout from "../Header component/Layout";
import React, { Component } from "react";
import fire from '../Config/fire';

// import axios from "axios";

// const Settings = () => (
//   <Layout>
//     <div>
//       <p>Hello from settings Next.js</p>
//     </div>
//   </Layout>
// );

// import pilots(users), this component will open settings to changes user's name
// billing info etc, probably wont need a get all but only get by id, update, delete
//set state, to username, password, paid/unpaid,
class Settings extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name:"",
        email: "",
      }
    };
  }
sendResetEmail=()=>{
  const email= this.state.user.email;
  fire.auth().sendPasswordResetEmail(email).then(function() {
    console.log('email sent')
  }).catch(function(error) {
    console.log('Please try again')
  });
}

  componentDidMount() {
    var currentUser = fire.auth().currentUser;
    if(currentUser!=null){
      this.setState({
        user:{
          name: currentUser.displayName,
          email: currentUser.email
        }
      })
    }
    const name = localStorage.getItem("userName");
    console.log("name", name);
    this.setState({ name });
    console.log("settings");
  }
  render() {
    console.log(this.state);
    return (
      <Layout>
        <p>Name</p>
        {this.state.user.name}
        <p>Email</p>
        {this.state.user.email}
        <p>reset</p>
        <button onClick={this.sendResetEmail}>send password reset email</button>
      </Layout>
    );
  }
}

export default Settings;
