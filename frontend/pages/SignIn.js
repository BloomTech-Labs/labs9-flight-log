import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import firebase from 'firebase';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <AuthenticationForm handleChanges={this.handleChanges} />
      </div>
    );
  }
}
export default SignIn;
