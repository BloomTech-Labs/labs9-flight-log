import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import fire from "../Config/fire";

class SignInUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      fire.auth.GoogleAuthProvider.PROVIDER_ID,
      fire.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "/Flights"
  };
  componentDidMount() {
    // this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
    //   this.setState({ isSignedIn: !!user });
    //   this.props.updateState(!!user)
    // });
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    // this.unregisterAuthObserver();
  }

  render() {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}
export default SignInUi;
