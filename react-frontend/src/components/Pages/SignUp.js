import React from "react";
import fire from "../Config/fire";
import axios from "axios";
import firebase from "firebase";
import { Link } from "react-router-dom";
const facebook = new firebase.auth.FacebookAuthProvider();

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
      .then(() => {})
      .catch(error => {
        console.log(error, "nope dude, youve gone goof");
      });
  };
  sendUid = () => {
    fire
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        // Send token to your backend via HTTPS
        // ...
        console.log(idToken);
      })
      .catch(function(error) {
        // Handle error
        console.log(error);
      });
  };
  authWithFacebook() {
    fire
      .auth()
      .signInWithPopup(facebook)
      .then(result => {
        console.log("hey it works", result);
        if (result) {
          // Router.push("/Settings");
          // history.push("/Settings")
          console.log("firebase facebook");
        }
      })
      .catch(() => console.log("you are death, start over"));
  }
  signUpWithGoogle = () => {
    console.log("this in google modal", this);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = this.props.history;
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        if (result) {
          console.log("result", result);
          // router.push("/Settings")
          // axios.get("http://localhost:9000/pilots").then(response => {
          //   console.log(response);
          // });
          // const user = {
          //   firstName: "something",
          //   lastName: "somethingElse"
          // token:
          // };
          // console.log("headers", headers);
          fire
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function(idToken) {
              const headers = { token: idToken };
              axios.post("http://localhost:9000/pilots", headers);
              history.push("/Flights");
            });
        }
      })
      .catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
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
            <Link to="/Settings">
              <button onClick={this.createUser}>Sign Up</button>
            </Link>
          </form>
          <button onClick={this.signUpWithGoogle}>Google</button>
          <button onClick={this.authWithFacebook}>Facebook</button>
        </div>
      </div>
    );
  }
}
export default SignUp;
