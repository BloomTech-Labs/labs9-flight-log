import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import fire from "../../../components/Config/fire";

const storage = fire.storage();

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

const URL = "https://labs9-flight-log.herokuapp.com";

class AirplaneDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: "",
      airplane: {}
    };
  }
  handleClickOpen = () => {
    console.log("this.props.airplane", this.props);
    console.log("this.props.UID", this.props.UID);
    axios
      .get(`${URL}/airplanes/${this.props.UID}/${this.props.id}`)
      .then(response => {
        // console.log(response.data[0]);
        let airplane = response.data[0];
        this.setState({ ...airplane, open: true });
      })
      .catch(error => console.log(error));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
    console.log("delete", this.props.UID, this.state);
    const UID = this.props.UID;
    const desertRef = storage.ref(`${UID}/${this.state.imageName}`);
    desertRef
      .delete()
      .then(() => {
        // console.log("image Deleted successfully");
      })
      .catch(() => {
        // console.log("error deleting image");
      });
    axios
      .delete(`${URL}/airplanes/${this.props.id}`)
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
    console.log("this.state in delete modal", this.state);
    return (
      <Fragment>
        <Button
          variant="outlined"
          className={classes.button}
          color="secondary"
          aria-label="Delete Airplane"
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
          <DialogTitle id="form-dialog-title">Delete Airplane</DialogTitle>
          <DialogActions>
            <Button
              onClick={this.handleDelete}
              aria-label="ARE YOU SURE?"
              color="secondary"
              variant="contained"
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

// AirplaneDelete.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(AirplaneDelete);
