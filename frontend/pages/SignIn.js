import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import firebase from "firebase";
import fire from '../components/config/fire';
const facebook= new firebase.auth.FacebookAuthProvider();
const google= new firebase.auth.GoogleAuthProvider();
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
  authWithFacebook(){
    fire.auth().signInWithPopup(facebook).then(()=>console.log('hey it works')).catch(()=>console.log('you are death, start over'))
  }
  authWithGoogle(){
    fire.auth().signInWithPopup(google).then(()=>console.log('hey it works')).catch(()=>console.log('you are death, start over'))
  }
  render() {
    return (
      <div>
        <AuthenticationForm handleChanges={this.handleChanges} fbLogin={this.authWithFacebook} googleLogin={this.authWithFacebook}/>
      </div>
    );
  }
}

export default SignIn;
