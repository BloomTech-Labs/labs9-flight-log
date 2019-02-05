import React, { Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FlightTheme from "../Styles/theme";
import ReactSVG from "react-svg";
import { Link } from "react-router-dom";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: FlightTheme.palette.primary.light
    }
  },
  Button: {
    marginRight: "15px"
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroContent: {
    maxWidth: 600,
    textAlign: "center",
    margin: "0 auto",
    // marginTop: '40px',
    padding: `${theme.spacing.unit * 14}px 0 ${theme.spacing.unit * 6}px`
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Flytelog
            </Typography>
            <Link to="/SignIn">
              <Button color="primary" variant="outlined">
                Sign In/Sign Up
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <ReactSVG
              src="./shield-airplane-outline.svg"
              svgStyle={{ width: 250, height: 250 }}
            />
            <Typography variant="h1">Flytelog</Typography>
            <Typography variant="h3">Pilot's Logbook</Typography>
          </div>
          {/* End hero unit */}
        </main>
        {/* Footer */}
        <footer className={classNames(classes.footer, classes.layout)} />

        {/* End footer */}
      </Fragment>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
