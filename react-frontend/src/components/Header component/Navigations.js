import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from '@material-ui/core/Divider';

import { NavLink } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    //   width: "20%",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit,
    width: "90%"
  },
  input: {
    display: "none"
  },
  NavLink: {
    textDecoration: "none"
  }
});

function Navigation(props) {
  const { classes } = props;

  return (
    <div>
      <MenuList className={classes.root} elevation={1}>
        {/* <NavLink to="/" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Home</MenuItem>
        </NavLink>
        <Divider /> */}

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
      </MenuList>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
