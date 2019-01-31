import Layout from "../Header component/Layout";
import React, { Component } from "react";
import fire from '../Config/fire';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
        name: "",
        email: "",
      }
    };
  }
  sendResetEmail = () => {
    const email = this.state.user.email;
    fire.auth().sendPasswordResetEmail(email).then(function () {
      console.log('email sent')
    }).catch(function (error) {
      console.log('Please try again')
    });
  }

  componentDidMount() {
    var currentUser = fire.auth().currentUser;
    if (currentUser != null) {
      this.setState({
        user: {
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
        <Paper>
          <Typography variant="h5">Name:</Typography>
          {this.state.user.name}
          <Typography variant="h5">Email:</Typography>
          {this.state.user.email}
          <Typography variant="h5">Password reset:</Typography>
          <Button onClick={this.sendResetEmail}>send password reset email</Button>
        </Paper>

      </Layout>
    );
  }
}

export default Settings;
