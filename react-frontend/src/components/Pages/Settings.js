import Layout from "../Header component/Layout";
import React, { Component } from "react";
import fire from '../Config/fire';
import { withStyles } from "@material-ui/core"
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import axios from "axios";

// const Settings = () => (
//   <Layout>
//     <div>
//       <p>Hello from settings Next.js</p>
//     </div>
//   </Layout>
// );

// import pilots(users), this component will open settings to changes user's name
// billing info etc, probably wont need a get all but only get by id, update, delete
//set state, to username, password, paid/unpaid,

const styles = theme => ({
  mainContainer: {
    width: "70%",
    marginTop: 15,
    display: "flex",
    justifyContent: "center"
  },
  innerContainer: {
    padding: 20,
  },
  paper: {
    padding: 20,
  },
  text: {
    padding: 15,
  },
  button: {
    // padding: 15,
  }
});

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
      }
    };
  }
  sendResetEmail = () => {
    const email = this.state.user.email;
    fire.auth().sendPasswordResetEmail(email).then(function () {
      console.log('email sent')
    }).catch(function (error) {
      console.log('Please try again')
    });
  }

  componentDidMount() {
    var currentUser = fire.auth().currentUser;
    if (currentUser != null) {
      this.setState({
        user: {
          name: currentUser.displayName,
          email: currentUser.email
        }
      })
    }
    const name = localStorage.getItem("userName");
    console.log("name", name);
    this.setState({ name });
    console.log("settings");
  }
  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.mainContainer}>
        <Paper className="paper">
          <div className={classes.innerContainer}>
          <Typography className={classes.text} variant="title">Name:</Typography>
          <Typography className={classes.text} variant="h4">{this.state.user.name}</Typography>
          <Typography className={classes.text} variant="title">Email:</Typography>
          <Typography className={classes.text} variant="h4">{this.state.user.email}</Typography>
          {/* <Typography className={classes.text} variant="title">Password reset:</Typography> */}
          <Button className={classes.button} variant="outlined" onClick={this.sendResetEmail}>Reset Password</Button>
          </div>
        </Paper>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Settings);
