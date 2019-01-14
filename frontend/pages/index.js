import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FlightTheme from '../components/theme';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: FlightTheme.palette.primary.light,
    },
  },
  Button: {
    marginRight: "15px",
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    marginTop: '120px',
    padding: `${theme.spacing.unit * 14}px 0 ${theme.spacing.unit * 6}px`,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCP-EjmMT_X7izYqnqN2UgGqJFpb-wOoKM",
  authDomain: "lab9-flightlogs.firebaseapp.com",
  databaseURL: "https://lab9-flightlogs.firebaseio.com",
  projectId: "lab9-flightlogs",
  storageBucket: "lab9-flightlogs.appspot.com",
  messagingSenderId: "491408929287"
};
firebase.initializeApp(config);

function Landing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Insert Name/Logo Here
          </Typography>
          <Button className={classes.Button}>Sign Up </Button>
          <Button color="primary" variant="outlined">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Important Information Here
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
              This is some insane message that is a huge attention-getter
          </Typography>
        </div>
        {/* End hero unit */}
      </main>
      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
