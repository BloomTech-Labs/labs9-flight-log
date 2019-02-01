import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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

class FlightDelete extends React.Component {
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
  handleDelete = () => {
    axios
      .delete(`${URL}/flights/${this.props.id}`)
      .then(response => {
        console.log(response);
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
          variant="contained"
          className={classes.button}
          color="secondary"
          aria-label="Delete"
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
          <DialogTitle id="form-dialog-title">Delete Flight</DialogTitle>
          <DialogContent>
            <DialogActions>
              <Button onClick={this.handleDelete} color="secondary">
                DELETE
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

FlightDelete.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlightDelete);
