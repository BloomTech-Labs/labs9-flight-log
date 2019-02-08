import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import fire from "../../../components/Config/fire";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";

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
  card: {
    height: 403
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
  addCardContent: {
    textAlign: "center",
    marginTop: "40%"
  }
});

class AirplaneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      tailNumber: "",
      make: "",
      model: "",
      category: "",
      pilotsUID: "",
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
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange = name => event => {
    // console.log(name, event);
    this.setState({ [name]: event.target.value });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange(files) {
    // console.log("files", files);
    this.setState({
      files: files
    });
    // console.log(this.state.files);
  }

  submitAddForm = () => {
    const UID = this.props.UID;
    // console.log(UID);
    // console.log("this.state.files", this.state.files);
    // console.log("this.state.imageName", this.state.imageName);

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
    const newAirplane = {
      make: this.state.make,
      model: this.state.model,
      tailNumber: this.state.tailNumber,
      category: this.state.category,
      pilotsUID: UID,
      imageName: this.state.image.name
    };
    //http://localhost:9000/airplanes
    //https://labs9-flight-log.herokuapp.com/airplanes
    axios
      .post("https://labs9-flight-log.herokuapp.com/airplanes", newAirplane)
      .then(response => {
        console.log("inside airplane post");
        this.setState({
          open: false,
          files: [],
          tailNumber: "",
          make: "",
          model: "",
          category: "",
          pilotsUID: "",
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
        <Card className={classes.card}>
          <div className={classes.addCardContent}>
            <Typography gutterBottom variant="h4" color="inherit" noWrap>
              Add Airplane
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
          <DialogTitle id="form-dialog-title">Airplane:</DialogTitle>

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

                <Grid item sm={12}>
                  <DropzoneArea
                    onChange={this.handleImage}
                    showPreviews={true}
                    acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
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
// AirplaneForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(AirplaneForm);
