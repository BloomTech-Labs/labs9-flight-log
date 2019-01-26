import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

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
  Link: {
    textDecoration: "none"
  }
});

function Navigation(props) {
  const { classes } = props;

  return (
    <div>
      <MenuList className={classes.root} elevation={1}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Home</MenuItem>
        </Link>

        <Link to="/Flights" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Flights</MenuItem>
        </Link>

        <Link to="/Airplanes" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Airplanes</MenuItem>
        </Link>

        <Link to="/Instructors" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Instructors</MenuItem>
        </Link>

        <Link to="/Billing" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Billing</MenuItem>
        </Link>

        <Link to="/Settings" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Settings</MenuItem>
        </Link>

        <Link to="/Pilots" style={{ textDecoration: "none" }}>
          <MenuItem className={classes.button}>Pilots</MenuItem>
        </Link>

        <MenuItem className={classes.button}>Flights1</MenuItem>
      </MenuList>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
