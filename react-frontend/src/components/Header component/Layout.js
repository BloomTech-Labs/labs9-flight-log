import Navigation from "./Navigations";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FlightTheme from '../Styles/theme';
import React from 'react';
// import {BrowserRouter as Router}from 'react-router-dom';

import fire from "../Config/fire";
import TotalsModal from '../Pages/TotalsModal'



const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: FlightTheme.palette.primary.light,
    },
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  button: {
    marginRight: "15px",
  },
  totalsModal: {
    marginRight: theme.spacing.unit,
  }

});




class Layout extends React.Component {
  signOut = () => {
    fire.auth().signOut();
  }

  render() {
    const { classes } = this.props;
    // const Layout = (props) => {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Flight Log
            </Typography>
            <TotalsModal className={classes.totalsModal} />
            <Button variant="outlined" onClick={this.signOut}>Sign Out</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={16} direction="row" justify="space-between" alignItems="stretch">
          <Grid item xs={2}>
            <Navigation />
          </Grid>
          <Grid item xs={10}>
            {this.props.children}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Layout);
