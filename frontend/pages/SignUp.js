import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import fire from "../components/config/fire";
import Router from "next-router";
import axios from 'axios';
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
  componentDidMount(){
    fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      let headers={'token':idToken}
      axios.post("https://labs9-flight-log.herokuapp.com/pilots", {headers:headers})
      console.log(idToken)
    }).catch(function(error) {
      // Handle error
      console.log(error)
    });
  }
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
