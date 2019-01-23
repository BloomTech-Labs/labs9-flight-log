import React from "react";
import firebase from "firebase";
import fire from "../components/config/fire";
const facebook = new firebase.auth.FacebookAuthProvider();


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
      ).then((result)=>{
        console.log(result)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
  sendUid= ()=>{
    fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      // Send token to your backend via HTTPS
      // ...
      console.log(idToken)
    }).catch(function(error) {
      // Handle error
      console.log(error)
    });
  }
  authWithFacebook() {
    fire
      .auth()
      .signInWithPopup(facebook)
      .then(result => {
        console.log("hey it works", result);
        if (result) {
          Router.push("/Settings");
        }
      })
      .catch(() => console.log("you are death, start over"));
  }
  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.credential.idToken);
        if (result) {
          Router.push("/Settings");
        }
        fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          // Send token to your backend via HTTPS
          // ...
          console.log(idToken)
        }).catch(function(error) {
          // Handle error
          console.log(error)
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
        {/* <AuthenticationForm
          handleChanges={this.handleChanges}
        /> */}
        <form>
          <input
            onChange={this.handleChanges}
            name="username"
            placeholder="username"
          />
          <input
            onChange={this.handleChanges}
            name="password"
            placeholder="password"
          />
          <button onClick={this.handleSubmit}>Sign in</button>
        </form>
        <button onClick={this.signInWithGoogle}>Google</button>
        <button onClick={this.authWithFacebook}>Facebook</button>
      </div>
    );
  }
}

export default SignIn;
