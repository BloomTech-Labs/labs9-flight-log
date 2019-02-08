import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
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
import Card from "@material-ui/core/Card";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

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
  },
  card: {
    height: 403
  },
  addCardContent: {
    textAlign: "center",
    marginTop: "40%"
  }
});

class InstructorForm extends Component {
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
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  submitAddForm = () => {
    const UID = this.props.UID;
    const newInstructor = {
      name: this.state.name,
      licenseNum: this.state.licenseNum,
      notes: this.state.notes,
      ratings: this.state.ratings,
      contactInfo: this.state.contactInfo,
      pilotsUID: UID
    };
    //http://localhost:9000.com/instructors
    axios
      .post("https://labs9-flight-log.herokuapp.com/instructors", newInstructor)
      .then(() => {
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
        <Card className={classes.card}>
          <div className={classes.addCardContent}>
            <Typography gutterBottom variant="h4" color="inherit" noWrap>
              Add Instructor
            </Typography>
            <Fab
              color="primary"
              aria-label="Add"
              onClick={this.handleClickOpen}
            >
              <AddIcon />
            </Fab>
          </div>
        </Card>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Instructor</DialogTitle>

          <DialogContent>
            <div style={{ padding: 5 }}>
              <Grid
                container
                spacing={24}
                direction="row"
                justify="space-between"
                alignItems="stretch"
              >
                <Grid item xs={12}>
                  <TextField
                    required
                    name="name"
                    id="instructor-name"
                    label="Name"
                    // defaultValue="Name"
                    value={this.state.name}
                    onChange={this.editFormHandler}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="licenseNum"
                    id="instructor-license"
                    label="License No."
                    // defaultValue="License No."
                    value={this.state.licenseNum}
                    onChange={this.editFormHandler}
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    id="notes"
                    name="notes"
                    label="Notes"
                    value={this.state.notes}
                    onChange={this.editFormHandler}
                    className={classes.textField}
                    multiline
                    rows="2"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    label="Contact"
                    value={this.state.contactInfo}
                    onChange={this.editFormHandler}
                    className={classes.textField}
                    multiline
                    rows="2"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
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
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.submitAddForm} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

// InstructorForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(InstructorForm);
