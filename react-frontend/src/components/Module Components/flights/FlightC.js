import React, { Fragment, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    // margin:"normal",
    marginRight: 15,
    marginTop: 15,
  },
  dense: {
    marginTop: 16
  },
  flightName: {
    width: "70%",
    marginRight: 15,
    marginTop: 15,
  },
  button: {
    marginTop: 15,
  },
  menu: {
    width: 500
  },
  card: {
    height: "329px",
    maxWidth: 345
    // marginBottom: 20,
    // minWidth: 200,
  }
});

//flight creation component
class FlightC extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      flightDate: "", //date
      flightName: "", //string
      airports: "", // string
      remarks: "", //text
      numOfTakeOffs: "", //int
      numOfLandings: "", //int
      SEL: "", //float
      MEL: "", //float
      dayHours: "", //float
      nightHours: "", //float
      actInstruments: "", //float
      simInstruments: "", //float
      groundTrainer: "", //float
      crossCountry: "", //float
      asInstructor: "", //float
      dualReceived: "", //float
      pilotInCommand: "", //float
      total: "" //float
    };
  }
  //edit form handler
  editFormHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //submit add form
  submitAddForm = () => {
    
    const newFlight = {
      flightName: this.state.flightName,
      flightDate: this.state.flightDate,
      airports: this.state.airports,
      remarks: this.state.remarks,
      numOfTakeOffs: this.state.numOfTakeOffs,
      numOfLandings: this.state.numOfLandings,
      SEL: this.state.SEL,
      MEL: this.state.MEL,
      dayHours: this.state.daysHours,
      nightHours: this.state.nightHours,
      actInstruments: this.state.actInstruments,
      simInstruments: this.state.simInstruments,
      groundTrainer: this.state.groundTrainer,
      crossCountry: this.state.crossCountry,
      asInstructor: this.state.crossCountry,
      dualReceived: this.state.dualReceived,
      pilotInCommand: this.state.pilotInCommand,
      total: this.state.total,
    }
    console.log("added");

    axios
      .post(`${URL}/Flights`, newFlight)
      .then(() => {
        console.log(this.props);
        this.props.history.push('/Flights');
        this.setState(
          {
            flightDate: "", //date
            flightName: "", //string
            airports: "", // string
            remarks: "", //text
            numOfTakeOffs: "", //int
            numOfLandings: "", //int
            SEL: "", //float
            MEL: "", //float
            dayHours: "", //float
            nightHours: "", //float
            actInstruments: "", //float
            simInstruments: "", //float
            groundTrainer: "", //float
            crossCountry: "", //float
            asInstructor: "", //float
            dualReceived: "", //float
            pilotInCommand: "", //float
            total: "" //float
          }
        )
      })
      .catch(error => console.log(error));
    this.setState({ open: false });
    //axios call to post
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

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid item lg={2} xs={10} sm={6} md={4}>
          <Card className={classes.card}>
            <Typography variant="h6" color="inherit" noWrap>
              Add Flight
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
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth= "md"
          className={classes.dialog}
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Edit / Create Flight</DialogTitle>
          <DialogContent
            className="dialogContent"
            onSubmit={this.submitAddForm}

          >
              <TextField 
               className={classes.flightName}
               type="string"
                name="flightName"
                label="Flight Name"
                value={this.state.name}
                onChange={this.editFormHandler}
                // fullWidth
                variant="outlined"
              />
            <TextField
              // autoFocus
              className={classes.textField}
              type="date"
              name="flightDate"
              // label="Flight Date"
              placeholder="flight date"
              value={this.state.name}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="string"
              name="airports"
              label="Airport Routes"
              value={this.state.name}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />
            <div>
              <h1>SKYVECTOR HERE</h1>
            </div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="aircraft-native-simple">Aircraft</InputLabel>
              <Select
                native
                value={this.state.name}
                onChange={this.handleChange("aircraft")}
                inputProps={{
                  name: "aircraft",
                  id: "aircraft-native-simple"
                }}
              >
                <option value="" />
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="instructor-native-simple">
                Instructor
              </InputLabel>
              <Select
                native
                value={this.state.instructor}
                onChange={this.handleChange("instructor")}
                inputProps={{
                  name: "instructor",
                  id: "instructor-native-simple"
                }}
              >
                <option value="" />
              </Select>
            </FormControl>
            <TextField
            className={classes.textField}
              type="text"
              name="remarks"
              label="Remarks, Procedures, Manuevers"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
              multiline
              rows= "4"
              fullWidth
            />
            <TextField
            className={classes.textField}
              type="number"
              name="numOfTakeOffs"
              label="Number of Take Offs"
              // placeholder="input number of take offs"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="numOfLandings"
              label="Number of Landings"
              // placeholder="input number of landings"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="SEL"
              label="Number of Single Engine Landings"
              // placeholder="single engine land"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"

            />
            <TextField
            className={classes.textField}
              type="number"
              name="MEL"
              label="Number of Multi Engine Landings"
              // placeholder="multi engine land"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="dayHours"
              label="Day Hours"
              // placeholder="day hours"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="nightHours"
              label="Night Hours"
              // placeholder="night hours"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="actInstruments"
              label="Actual Instruments"
              // placeholder="actual instruments"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="simInstruments"
              label="Simulated Instruments"
              // placeholder="simulated instruments"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="groundTrainer"
              label="Ground Trainer"
              // placeholder="ground trainer"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="crossCountry"
              label="Cross Country"
              // placeholder="cross country"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="dualReceived"
              label="Dual Rec"
              // placeholder="dual received"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="pilotInCommand"
              label="Pilot In Command"
              // placeholder="pilot in command"
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <TextField
            className={classes.textField}
              type="number"
              name="total"
              label="Total Flight Hours"
              // placeholder=""
              value={this.state.name}
              onChange={this.editFormHandler}
              variant="outlined"
            />
            <div>
              <Button 
                type="submit" 
                onClick={this.submitAddForm} 
                variant="outlined" 
                color="primary"
                className={classes.button}
              >
               Add Flight
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

FlightC.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlightC);
