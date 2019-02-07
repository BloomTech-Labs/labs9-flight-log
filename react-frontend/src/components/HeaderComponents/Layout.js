import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import MoreIcon from "@material-ui/icons/MoreVert";
import { Menu, MenuItem, MenuList } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { withTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

// import from '@material-ui/icons'

import FlightTheme from "../Styles/theme";

import React from "react";
import { Redirect } from "react-router";

import fire from "../Config/fire";
import TotalsModal from "../Pages/TotalsModal";
import ReactSVG from "react-svg";

const drawerWidth = 110;

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
    zIndex: theme.zIndex.drawer + 1,
    position: "fixed"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "flex"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    background: "default",
    [theme.breakpoints.down("xs")]: {
      width: drawerWidth * 2,
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth
    }
  },
  toolbar: theme.mixins.toolbar,
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
      mobileOpen: false,
      mobileMoreAnchorEl: null
    };
  }
  signOut = () => {
    fire.auth().signOut();
    this.setState({
      signOut: !this.state.signOut
    });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
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
      />
    );

    const drawer = (
      <div>
        <MenuList className={classes.root} elevation={1}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <MenuItem className={classes.button}>Flights</MenuItem>
          </NavLink>
          <Divider />

          <NavLink to="/Airplanes" style={{ textDecoration: "none" }}>
            <MenuItem className={classes.button}>Airplanes</MenuItem>
          </NavLink>
          <Divider />

          <NavLink to="/Instructors" style={{ textDecoration: "none" }}>
            <MenuItem className={classes.button}>Instructors</MenuItem>
          </NavLink>
          <Divider />

          <NavLink to="/Billing" style={{ textDecoration: "none" }}>
            <MenuItem className={classes.button}>Billing</MenuItem>
          </NavLink>
          <Divider />

          <NavLink to="/Settings" style={{ textDecoration: "none" }}>
            <MenuItem className={classes.button}>Settings</MenuItem>
          </NavLink>
          <Divider />
        </MenuList>
      </div>
    );

    if (this.state.signOut) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <ReactSVG
              src="./shield-airplane-outline.svg"
              svgStyle={{ width: 35, height: 35, marginTop: 5 }}
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
              <TotalsModal
                className={classes.totalsModal}
                UID={this.props.UID}
              />
              <Button variant="outlined" onClick={this.signOut}>
                Sign Out
              </Button>
            </div>
            {/* <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div> */}
          </Toolbar>
          {renderMobileMenu}
        </AppBar>

        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={this.props.theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
              <MenuItem onClick={this.handleMobileMenuClose}>
                <TotalsModal
                  className={classes.totalsModal}
                  UID={this.props.UID}
                />
              </MenuItem>
              <Divider />
              <MenuItem onClick={this.signOut}>
                  Sign Out
              </MenuItem>
              <Divider />

            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              <div className={classes.toolbar} />
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withTheme()(Layout));
