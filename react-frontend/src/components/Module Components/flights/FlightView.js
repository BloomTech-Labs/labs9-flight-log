import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

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

class FlightView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      flightDate: "",
      flightName: "",
      airports: "",
      remarks: "",
      numOfTakeOffs: "",
      numOfLandings: "",
      SEL: "",
      MEL: "",
      dayHours: "",
      nightHours: "",
      actInstruments: "",
      simInstruments: "",
      groundTrainer: "",
      crossCountry: "",
      asInstructor: "",
      dualReceived: "",
      pilotInCommand: "",
      total: "",
      airplanesID: "",
      instructorsID: "",
      //
      airplanes: [],
      instructors: [],
      airplane: "",
      instructor: ""
    };
  }
  handleClickOpen = () => {
    console.log("this.props.airplanes", this.props.airplanes);
    console.log("this.props.instructors", this.props.instructors);
    const airplane = this.props.airplanes.find(
      airplane => airplane.id === this.props.flight.airplanesID
    );
    const instructor = this.props.instructors.find(
      instructor => instructor.id === this.props.flight.instructorsID
    );
    this.setState({
      ...this.props.flight,
      airplane: airplane,
      instructor: instructor,
      open: true
    });
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
          <DialogTitle id="form-dialog-title">Flight View</DialogTitle>

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
                <Grid className={classes.textField} sm={5}>
                  Flight Name: {this.state.flightName}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Flight Date: {this.state.flightDate}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Routes/ Airports Viseted: {this.state.airports}
                </Grid>
                <Grid className={classes.image} sm={8}>
                  <img
                    src={"https://via.placeholder.com/250"}
                    height="250"
                    width="250"
                    alt="skyVector"
                  />
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Airplane Tail Number: {this.state.airplane.tailNumber}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Airplane Model: {this.state.airplane.model}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Instructors name: {this.state.instructor.name}, instructors
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  license number: {this.state.instructor.licenseNum}
                </Grid>
                <Grid className={classes.textField} sm={11}>
                  remarks: {this.state.remarks}
                </Grid>

                <Grid className={classes.textField} sm={3}>
                  SEL: {this.state.SEL}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  MEL: {this.state.MEL}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  GroundT: {this.state.groundTrainer}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  Takeoffs: {this.state.numOfTakeOffs}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  Landings:{this.state.numOfLandings}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  SimInst: {this.state.simInstruments}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  Day Hrs:{this.state.dayHours}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  Night Hrs:{this.state.nightHours}
                </Grid>
                <Grid className={classes.textField} sm={3}>
                  ActInst: {this.state.actInstruments}
                </Grid>

                <Grid className={classes.textField} sm={5}>
                  Dual Recieved: {this.state.dualReceived}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  PIC: {this.state.pilotInCommand}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  As Instrictpr: {this.state.asInstructor}
                </Grid>

                <Grid className={classes.textField} sm={5}>
                  CrossCountry: {this.state.crossCountry}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Total Hours:{this.state.total}
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FlightView);
