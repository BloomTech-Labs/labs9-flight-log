import Navigation from "./Navigations";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
// import LibraryAdd from "@material-ui/icons/LibraryAdd";
import AccountCircle from "@material-ui/icons/AccountCircle";

// import from '@material-ui/icons'

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
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOut: false,
      mobileMoreAnchorEl: null
    };
  }
  signOut = () => {
    fire.auth().signOut();
    this.setState({
      signOut: !this.state.signOut
    });
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <TotalsModal className={classes.totalsModal} />
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <AccountCircle />
            Sign Out
          </IconButton>
          {/* <Button variant="outlined" onClick={this.signOut}>
            Sign Out
          </Button> */}
        </MenuItem>
      </Menu>
    );

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
            <div className={classes.sectionDesktop}>
              <TotalsModal className={classes.totalsModal} />
              <Button variant="outlined" onClick={this.signOut}>
                Sign Out
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          {renderMobileMenu}
        </AppBar>
        <Grid
          container
          spacing={16}
          direction="row"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={5} sm={3} md={2}>
            <Navigation />
          </Grid>
          <Grid item xs={7} sm={9} md={10}>
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
