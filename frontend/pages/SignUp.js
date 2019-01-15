import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import firebase from "firebase";
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
  render() {
    return (
      <div>
        <AuthenticationForm handleChanges={this.handleChanges} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
export default SignUp;
