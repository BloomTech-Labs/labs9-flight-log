import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import fire from "../components/config/fire";
import Router from "next-router";
import axios from 'axios';
import Link from 'next/link';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      }
    };
  }
  handleChanges = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };
  createUser = event => {
    fire
      .auth()
      .createUserWithEmailAndPassword(
        this.state.user.username,
        this.state.user.password
      )
      .then(()=>{})
      .catch(error => {
        console.log(error, "nope dude, youve gone goof");
      });
  };
 
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.createUser}>
            <input
              name="username"
              placeholder="Username"
              onChange={this.handleChanges}
            />
            <input
              name="password"
              placeholder="password"
              onChange={this.handleChanges}
            />
            <button onClick={this.createUser}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
