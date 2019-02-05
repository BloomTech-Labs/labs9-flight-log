import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const styles = theme => ({
  root: {
    flexGrow: 1
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

class InstructorEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      licenseNum: "",
      contactInfo: "",
      notes: "",
      ratings: ""
    };
  }

  editFormHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
  submitEditForm = () => {
    const updatedInstructor = {
      name: this.state.name,
      licenseNum: this.state.licenseNum,
      contactInfo: this.state.contactInfo,
      notes: this.state.notes,
      ratings: this.state.ratings
    };
    axios
      .put(`${URL}/instructors/${this.state.id}`, updatedInstructor)
      .then(response => {
        console.log(response);
        this.setState({
          open: false,
          name: "",
          licenseNum: "",
          contactInfo: "",
          notes: "",
          ratings: ""
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
          color="default"
          aria-label="Add"
          onClick={this.handleClickOpen}
          fullWidth
        >
          Edit
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Instructor</DialogTitle>

          <DialogContent>
            <div style={{ padding: 5 }}>
              <Grid
                container
                spacing={24}
                direction="row"
                justify="space-between"
                alignItems="stretch"
              >
                <Grid item xs={12} sm={6}>
                  <FormControl required fullWidth>
                    <InputLabel>Instructor Name</InputLabel>
                    <OutlinedInput
                      type="string"
                      name="name"
                      value={this.state.name}
                      onChange={this.editFormHandler}
                    />
                    <FormHelperText id="my-helper-text1">
                      This field is required.
                    </FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl required fullWidth>
                    <InputLabel>Instuctor License Number</InputLabel>
                    <OutlinedInput
                      type="string"
                      name="licenseNum"
                      value={this.state.licenseNum}
                      onChange={this.editFormHandler}
                    />
                    <FormHelperText id="my-helper-text2">
                      This field is required.
                    </FormHelperText>
                  </FormControl>
                </Grid>

                <TextField
                  type="text"
                  id="notes"
                  name="notes"
                  label="Notes"
                  value={this.state.notes}
                  onChange={this.editFormHandler}
                  className={classes.textField}
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
                  className={classes.textField}
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
                  className={classes.textField}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.submitEditForm} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

InstructorEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructorEdit);
