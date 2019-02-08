import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import CardMedia from "@material-ui/core/CardMedia";

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
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: 5
  },
});

class AirplaneEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      tailNumber: "",
      make: "",
      model: "",
      category: "",
      image: "",
      imageName: ""
    };
  }

  handleImage = e => {
    if (e[0]) {
      this.setState({ image: e[0] });
    }
  };

  editFormHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    // console.log("this.props", this.props);
    this.setState({ ...this.props.airplane, open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(files) {
    this.setState({
      files: files
    });
  }

  submitEditForm = () => {
    const UID = this.props.UID;
    if (this.state.image) {
      const image = this.state.image;
      const uploadTask = storage.ref(`${UID}/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // console.log(snapshot);
        },
        error => {
          console.log(error);
        },
        () => {
          // console.log("complete");
        }
      );
    }

    const updatedAirplane = {
      make: this.state.make,
      model: this.state.model,
      tailNumber: this.state.tailNumber,
      category: this.state.category,
      imageName: this.state.image.name
    };
    axios
      .put(
        `https://labs9-flight-log.herokuapp.com/airplanes/${this.state.id}`,
        updatedAirplane
      )
      .then(response => {
        // console.log("response", response);
        this.setState({
          open: false,
          files: [],
          tailNumber: "",
          make: "",
          model: "",
          category: "",
          image: null
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
          aria-label="Edit Airplane"
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
          <DialogTitle id="form-dialog-title">Edit Airplane</DialogTitle>
          <DialogContent>
            <div style={{ padding: 10 }}>
              <Grid
                container
                spacing={16}
                direction="row"
                justify="space-between"
                alignItems="stretch"
              >
                <Grid item sm={12}>
                  <FormControl required fullWidth>
                    <InputLabel>Airplane Tail Number</InputLabel>
                    <OutlinedInput
                      type="string"
                      name="tailNumber"
                      value={this.state.tailNumber}
                      onChange={this.editFormHandler}
                    />
                    <FormHelperText id="my-helper-text1">
                      This field is required.
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item sm={12}>
                  <FormControl required fullWidth>
                    <InputLabel>Airplane Make</InputLabel>
                    <OutlinedInput
                      type="string"
                      name="make"
                      value={this.state.make}
                      onChange={this.editFormHandler}
                    />
                    <FormHelperText id="my-helper-text2">
                      This field is required.
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item sm={12}>
                  <FormControl required fullWidth>
                    <InputLabel>Airplane Model</InputLabel>
                    <OutlinedInput
                      type="string"
                      name="model"
                      value={this.state.model}
                      onChange={this.editFormHandler}
                    />
                    <FormHelperText id="my-helper-text3">
                      This field is required.
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item sm={12}>
                  <FormControl required fullWidth>
                    <InputLabel>Airplane Category</InputLabel>
                    <OutlinedInput
                      type="string"
                      name="category"
                      value={this.state.category}
                      onChange={this.editFormHandler}
                    />
                    <FormHelperText id="my-helper-text4">
                      This field is required.
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <CardMedia
                    className={classes.media}
                    image={`${this.state.imageName}`}
                    title="Picture of airplane"
                  />
                </Grid>

                <Grid item sm={12}>
                  <DropzoneArea
                    onChange={this.handleImage}
                    showPreviews={true}
                    acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                  />
                </Grid>
              </Grid>
            </div>
            <DialogActions>
              <Button onClick={this.submitEditForm} color="primary">
                Update
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

AirplaneEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirplaneEdit);
