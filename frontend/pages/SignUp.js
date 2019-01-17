import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import fire from '../components/config/fire'
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
  createUser= (event)=>{
    fire.auth().createUserWithEmailAndPassword(this.state.user.username, this.state.user.password).then((result)=>{
      console.log(result, 'hey created here')
    }).catch((error)=>{
      console.log(error, 'nope dude, youve gone goof')
    })
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
