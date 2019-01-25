import React, { Component } from "react";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Typography from "@material-ui/core/Typography";
import axios from "axios";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
// import InstructorD from "./InstructorD";

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

const URL = `https://labs9-flight-log.herokuapp.com`;

//instructor edit component
class InstructorEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: 0,
      name: "",
      licenseNum: "",
      contactInfo: "",
      notes: "",
      ratings: "",
    };
  }

  //edit form handler
  editFormHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ ...this.props.instructor, open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  //submit edit form
  submitEditForm = () => {
    const updatedInstructor = { 
      id: this.state.id,
      name: this.state.name,
      licenseNum: this.state.licenseNum,
      contactInfo: this.state.contactInfo,
      notes: this.state.notes,
      ratings: this.state.ratings,
    };
    axios
      .put(`${URL}/instructors/${this.state.id}`, updatedInstructor)
      .then(() => {
        this.setState({
          open: false,
          id: 0,
          name: "",
          licenseNum: "",
          contactInfo: "",
          notes: "",
          ratings: ""
        })
        this.props.switcher();
      })
      .catch(error => console.log(error));
    console.log("edited");
  };
  //submit delete
  submitDelete = () => {

    console.log("deleted");
    //axios call to delete
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} color="primary" aria-label="Add" onClick={this.handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Edit / Create Instructor
          </DialogTitle>
          <DialogContent>
            <TextField
              type="string"
              name="name"
              label="Name"
              value={this.state.name}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              id="licenseNum"
              name="licenseNum"
              label="License Number"
              value={this.state.licenseNum}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              type="text"
              id="notes"
              name="notes"
              label="Notes"
              value={this.state.notes}
              onChange={this.editFormHandler}
              multiline
              rows="4"
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              id="contactInfo"
              name="contactInfo"
              label="Contact"
              value={this.state.contactInfo}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              id="ratings"
              name="ratings"
              label="Ratings"
              value={this.state.ratings}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />

            <DialogActions>
              <Button onClick={this.submitEditForm} color="primary">
                Update
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}


export default withStyles(styles)(InstructorEdit);

