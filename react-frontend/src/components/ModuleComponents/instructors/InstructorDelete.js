import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const URL = "https://labs9-flight-log.herokuapp.com";

class InstructorDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      id: ""
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteInstructor = () => {
    axios
      .delete(`${URL}/instructors/${this.props.id}`)
      .then(response => {
        // console.log(response);
        this.setState({
          open: false
        });
        this.props.switcher();
      })
      .catch(error => console.log(error));
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          variant="outlined"
          className={classes.button}
          color="secondary"
          aria-label="Delete Instructor"
          onClick={this.handleClickOpen}
          fullWidth
        >
          Delete
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete Instructor</DialogTitle>
            <DialogActions>
              <Button
                onClick={this.deleteInstructor}
                variant="contained"
                className={classes.button}
                color="secondary"
                aria-label="ARE YOU SURE?"
                fullWidth
              >
                ARE YOU SURE?
              </Button>
            </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

// InstructorDelete.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(InstructorDelete);
