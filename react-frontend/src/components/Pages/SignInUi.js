import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import fire from "../Config/fire";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import withStyles from '@material-ui/core/styles/withStyles';

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
    const {classes}=this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(SignInUi);
