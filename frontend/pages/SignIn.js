import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import firebase from "firebase";
import fire from "../components/config/fire";
const facebook = new firebase.auth.FacebookAuthProvider();
const google = new firebase.auth.GoogleAuthProvider();
class SignIn extends React.Component {
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
  handleSubmit = event => {
    fire
      .auth()
      .signInWithEmailAndPassword(
        this.state.user.username,
        this.state.user.password
      )
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
  authWithFacebook() {
    fire
      .auth()
      .signInWithPopup(facebook)
      .then(() => console.log("hey it works"))
      .catch(() => console.log("you are death, start over"));
  }
  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  render() {
    return (
      <div>
        {/* <AuthenticationForm
          handleChanges={this.handleChanges}
        /> */}
        <form>
          <input onChange={this.handleChanges} name='username' placeholder='username'/>
          <input onChange={this.handleChanges} name='password' placeholder='password'/>
          <button onClick={this.handleSubmit}>Sign in</button>
        </form>
        <button onClick={this.signInWithGoogle}>Google</button>
        <button onClick={this.authWithFacebook}>Facebook</button>
      </div>
    );
  }
}

export default SignIn;
