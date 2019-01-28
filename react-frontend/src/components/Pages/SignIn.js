import React from "react";

import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import firebase from "firebase";
import fire from "../Config/fire";
import axios from "axios";
const facebook = new firebase.auth.FacebookAuthProvider();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    margin: theme.spacing.unit
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
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
        this.state.user.email,
        this.state.user.password
      )
      .then(result => {
        console.log(result);
        
      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ...
      });
  };

  sendUid = () => {
    fire
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        // ...
        console.log(idToken);
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      });
  };

  signInWithFacebook() {
    fire
      .auth()
      .signInWithPopup(facebook)
      .then(result => {
        console.log("hey it works", result);
        if (result) {
          // Router.push("/Settings");
          // history.push("/Settings")
          console.log("firebase facebook");
        }
      })
      .catch(() => console.log("you are death, start over"));
  }

  signInWithGoogle = () => {
    // console.log("this in google modal", this);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = this.props.history;
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        if (result) {
          // console.log("result", result, result.credential.idToken);
          fire
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
              const body = idToken;
              console.log("idToken", idToken);
              axios
<<<<<<< HEAD
                .post("https://labs9-flight-log.herokuapp.com", {
=======
                .get("https://labs9-flight-log.herokuapp.com/pilots/signin", {
>>>>>>> faf6e9d5d03af2cda4bc8795483c0e92a71adc2a
                  params: { token: body }
                })
                .then(response => {
                  console.log("response.data", response.data);
                  const uid = response.data.PilotUID;
                  const name = response.data.PilotName;
                  localStorage.setItem("userID", uid);
                  localStorage.setItem("userName", name);
                  history.push("/Settings");
                });
              // console.log("idtoken", idToken);
              // })
              // .catch(function(error) {
              //   // Handle error
              //   console.log(error);
            });
        }
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
            </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus value={this.state.email} onChange={this.handleChanges} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" type="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChanges} />
            </FormControl>
            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
            <div className={classes.buttonRow}>
              <Button
                type="text"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.signInWithGoogle}
              >
                Google
              </Button>
              <Button
                type="text"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.signInWithFacebook}
              >
                Facebook
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onSubmit={this.handleSubmit}
              >
                Email
              </Button>
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
