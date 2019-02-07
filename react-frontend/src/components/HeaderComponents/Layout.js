import Navigation from "./Navigations";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FlightTheme from "../Styles/theme";
import React from "react";
import { Redirect } from "react-router";

import fire from "../Config/fire";
import TotalsModal from "../Pages/TotalsModal";
import ReactSVG from "react-svg";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: FlightTheme.palette.primary.light
    }
  },
  root: {
    flexGrow: 1
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
  button: {
    marginRight: "15px"
  }
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOut: false
    };
  }
  signOut = () => {
    fire.auth().signOut();
    this.setState({
      signOut: !this.state.signOut
    });
  };

  render() {
    const { classes } = this.props;
    // const Layout = (props) => {
    console.log("this.props in layout", this.props);
    console.log("UID in layout", this.props.UID);
    if (this.state.signOut) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <ReactSVG
              src="./shield-airplane-outline.svg"
              svgStyle={{ width: 40, height: 40 }}
            />
            <Typography
              variant="h4"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Flytelog
            </Typography>
            <TotalsModal className={classes.totalsModal} UID={this.props.UID} />
            <Button variant="outlined" onClick={this.signOut}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={16}
          direction="row"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item sm={3} md={2}>
            <Navigation />
          </Grid>
          <Grid item sm={9} md={10}>
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
