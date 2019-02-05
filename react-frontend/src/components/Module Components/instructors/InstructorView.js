import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
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
    marginRight: theme.spacing.unit,
    border: "1px solid black",
    borderRadius: 3,
    boxShadow: "3px 3px 5px 6px #ccc"
  },
  image: {
    borderRadius: 3,
    margin: 2,
    boxShadow: "3px 3px 5px 6px #ccc"
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
      <Fragment>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
          fullWidth
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
            <div style={{ padding: 10 }}>
              <Grid
                container
                className={classes.root}
                spacing={16}
                direction="row"
                justify="space-between"
                alignItems="stretch"
              >
                <Grid className={classes.textField} sm={8}>
                  Instructor's Name: {this.state.name}
                </Grid>
                <Grid className={classes.textField} sm={8}>
                  License Number: {this.state.licenseNum}
                </Grid>
                <Grid className={classes.textField} sm={8}>
                  Contact Info: {this.state.contactInfo}
                </Grid>
                <Grid className={classes.textField} sm={8}>
                  Notes: {this.state.notes}
                </Grid>
                <Grid className={classes.textField} sm={8}>
                  Ratings: {this.state.ratings}
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(InstructorView);
