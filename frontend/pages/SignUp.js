import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import firebase from "firebase";
import fire from "../components/config/fire";
import Router from "next/router";
// import axios from 'axios';
import Link from "next/link";
import axios from "axios";
const facebook = new firebase.auth.FacebookAuthProvider();
const google = new firebase.auth.GoogleAuthProvider();

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
  signUpWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.credential.idToken);
        if (result) {
          Router.push("/Settings");
        }
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
      })
      .catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  postToDB = () => {
    axios.post("https://labs9-flight-log.herokuapp.com/pilots", {
      headers: headers
    });
  };

  signUpWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.credential.idToken);
        if (result) {
          Router.push("/Settings");
        }
        fire
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function(idToken) {
            console.log("idToken", idToken);
            // Send token to your backend via HTTPS
            // ...
            let headers = { token: idToken };
            postToDB(headers);
          })
          .catch(function(error) {
            // Handle error
            console.log(error);
          });
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
            <Link href="/Settings">
              <button onClick={this.createUser}>Sign Up</button>
            </Link>
          </form>
          <button onClick={this.signUpWithGoogle}>Google</button>
          <button onClick={this.signUpWithFacebook}>Facebook</button>
        </div>
      </div>
    );
  }
}
export default SignUp;
