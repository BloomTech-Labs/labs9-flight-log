import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";

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

class InstructorDelete extends React.Component {
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

  //submit add form
  deleteInstructor = () => {
    axios
      .delete(`${URL}/instructors/${this.props.id}`)
      .then(() => {
        this.setState({
          open: false,
        });
        this.props.switcher();
      })
      .catch(error => console.log(error));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} color="secondary" aria-label="Add" onClick={this.handleClickOpen}>
          Delete
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            DELETE Instructor
          </DialogTitle>
          <DialogContent>
            <DialogActions>
              <Button onClick={this.deleteInstructor} color="secondary">
                ARE YOU SURE?
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

InstructorDelete.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructorDelete);
