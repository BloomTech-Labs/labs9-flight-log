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
const UID = localStorage.getItem("userID");

class InstructorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      instructorName: "",
      instructorLicenseNumber: "",
      instructorContactInformation: "",
      instructorNotes: "",
      instructorRatings: ""
    };
  }

  editFormHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //submit add form
  submitAddForm = () => {
    const newInstructor = {
      name: this.state.instructorName,
      licenseNum: this.state.instructorLicenseNumber,
      notes: this.state.instructorNotes,
      ratings: this.state.instructorRatings,
      contactInfo: this.state.instructorContactInformation,
      pilotsUID: UID
    };
    console.log("added");
    axios
      .post(`${URL}/instructors`, newInstructor)
      .then(() => {
        console.log(this.props);
        this.setState({
          open: false,
          instructorName: "",
          instructorLicenseNumber: "",
          instructorContactInformation: "",
          instructorNotes: "",
          instructorRatings: ""
        });
        console.log("this.props", this.props);
        this.props.switcher();
      })
      .catch(error => console.log(error));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h6" color="inherit" noWrap>
          Add Instructor
        </Typography>
        <Fab color="primary" aria-label="Add" onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>
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
              name="instructorName"
              label="Name"
              value={this.state.instructorName}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              id="licenseNum"
              name="instructorLicenseNumber"
              label="License Number"
              value={this.state.instructorLicenseNumber}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              type="text"
              id="notes"
              name="instructorNotes"
              label="Notes"
              value={this.state.instructorNotes}
              onChange={this.editFormHandler}
              multiline
              rows="4"
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              id="contactInfo"
              name="instructorContactInformation"
              label="Contact"
              value={this.state.instructorContactInformation}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              id="ratings"
              name="instructorRatings"
              label="Ratings"
              value={this.state.instructorRatings}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />

            <DialogActions>
              <Button onClick={this.submitAddForm} color="primary">
                Save
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

InstructorForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructorForm);
