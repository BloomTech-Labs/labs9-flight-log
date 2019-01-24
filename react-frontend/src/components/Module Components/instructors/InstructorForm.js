import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class InstructorForm extends React.Component {
  state = {
    open: false,
    instructorName: "",
    instructorLicenseNumber: "",
    instructorContactInformation: "",
    instructorNotes: "",
    instructorRatings: "",
    labelWidth: 0
  };

  //   componentDidMount() {
  //         this.setState({
  //             labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
  //         });
  //     }
  editFormHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
          <DialogTitle id="form-dialog-title">Edit / Create Instructor</DialogTitle>
          <DialogContent >
            <TextField
              autoFocus
              type="text"
              margin="dense"
              id="instructorName"
              label="Instructors Name"
              value={this.state.instructorName}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="text"
              margin="dense"
              id="instructorLicenseNumber"
              label="Instructor's License Number"
              value={this.state.instructorLicenseNumber}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="text"
              margin="dense"
              id="instructorContactInformation"
              label="Instructor's Contact Information"
              value={this.state.instructorContactInformation}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              multiline
              rows="4"
              type="text"
              margin="dense"
              id="instructorNotes"
              label="Notes"
              value={this.state.instructorNotes}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="text"
              margin="dense"
              id="instructorRatings"
              label="Ratings"
              value={this.state.instructorRatings}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />

            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Save
              </Button>
            </DialogActions>
          </DialogContent >

        </Dialog>
      </div>
    );
  }
}


InstructorForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstructorForm);