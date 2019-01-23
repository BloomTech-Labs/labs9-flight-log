import React, {Fragment} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FlightTheme from '../components/theme';
import Link from 'next/link';


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


function Landing(props) {
  const { classes } = props;

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Insert Name/Logo Here
          </Typography>
          <Link href='/SignUp'><Button className={classes.Button}>Sign Up </Button></Link>
          <Link href='/SignIn'><Button color="primary" variant="outlined">
            Sign In
          </Button></Link>
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
    </Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
