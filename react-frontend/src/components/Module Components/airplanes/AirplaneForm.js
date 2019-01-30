import React, { Fragment, Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import fire from "../../../components/Config/fire";
import { Spring } from 'react-spring';
const storage = fire.storage();

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
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    marginBottom: 15,
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  card: {
    height: 345,
    maxWidth: 345
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
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
    }
  };

  editFormHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = name => event => {
    console.log(name, event);
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(files) {
    console.log("files", files);
    this.setState({
      files: files
    });
    console.log(this.state.files);
  }

  submitAddForm = () => {
    console.log("fired");
    const UID = this.props.UID;
    console.log("uid", UID);
    if (this.state.image) {
      const image = this.state.image;
      const uploadTask = storage.ref(`${UID}/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log(snapshot);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("complete");
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
    //http://localhost:9000
    axios
      .post("https://labs9-flight-log.herokuapp.com/airplanes", newAirplane)
      .then(response => {
        console.log(response);
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
        console.log("this.props", this.props);
        this.props.switcher();
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid item lg={2} xs={10} sm={6} md={4}>
          <Card className={classes.card}>
            <Typography variant="h6" color="inherit" noWrap>
              Add Airplane
            </Typography>
            <Fab
              color="primary"
              aria-label="Add"
              onClick={this.handleClickOpen}
            >
              <AddIcon />
            </Fab>
          </Card>
        </Grid>
        <Spring reset={ true } from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0}}>
        { props => 
        <Dialog
          style={props}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Airplane:</DialogTitle>
          <DialogContent>
            {/* <InputLabel htmlFor="aircraft-native-simple">Airplane</InputLabel> */}

            <TextField
              type="string"
              name="tailNumber"
              label="Tail Number"
              value={this.state.tailNumber}
              onChange={this.editFormHandler}
              className={classes.textField}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              name="make"
              label="Airplane Make"
              value={this.state.make}
              onChange={this.editFormHandler}
              required
              className={classes.textField}
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              name="model"
              label="Airplane Model"
              value={this.state.model}
              onChange={this.editFormHandler}
              required
              className={classes.textField}
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              name="category"
              label="Airplane Category"
              value={this.state.category}
              onChange={this.editFormHandler}
              required
              className={classes.textField}
              fullWidth
              variant="outlined"
            />
            <input name="image" type="file" onChange={this.handleImage} />
            <DropzoneArea
              onChange={this.handleImage}
              showPreviews={true}
              acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.submitAddForm} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        }
        </Spring>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AirplaneForm);
