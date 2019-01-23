import React from "react";
import fire from "../Config/fire";
import axios from 'axios';
import {Link} from 'react-router-dom';
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
            <Link to='/Settings'><button onClick={this.createUser}>Sign Up</button></Link>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
