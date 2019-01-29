import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  },
  card: {
    height: "290px",
    maxWidth: 345
  }
});

class InstructorView extends Component {
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
  handleClickOpen = () => {
    this.setState({ ...this.props.instructor, open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
        >
          View
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Instructor View</DialogTitle>

          <DialogContent>
            <div>ins name: {this.state.name}</div>
            <div>inst license number: {this.state.licenseNum}</div>
            <div>contact info: {this.state.contactInfo}</div>
            <div>notes: {this.state.notes}</div>
            <div>ratings: {this.state.ratings}</div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(InstructorView);
