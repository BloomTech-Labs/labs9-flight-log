import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import fire from "../Config/fire";
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FlightTheme from '../Styles/theme'
import { Spring } from 'react-spring';


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: FlightTheme.palette.primary.main,
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  paper: {
    width: 400,
    height: 250,
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
      fire.auth.FacebookAuthProvider.PROVIDER_ID,
      fire.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "/"
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
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 100}}>
          { props =>
          <Paper style={ props } className={classes.paper} square={false}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Paper>
          }
        </Spring>
      </main>
    );
  }
}
export default withStyles(styles)(SignInUi);
