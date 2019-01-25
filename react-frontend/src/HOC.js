import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import fire from "./components/Config/fire";
import App from "./App";
import Headers from "./components/Pages/Headers";

class HOC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }
  updateState = value => {
    this.setState({ isSignIn: value });
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  }
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <Headers updateState={this.updateState} />
        </div>
      );
    } else {
      return (
        <div>
          <App />
        </div>
      );
    }
  }
}

export default HOC;
