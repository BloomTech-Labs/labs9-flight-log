import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";

// import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
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
            <div>
              flight name: {this.state.flightName}
              flight date: {this.state.flightDate}
            </div>
            <div>routes:{this.state.airports}</div>
            <img
              src={"https://via.placeholder.com/250"}
              height="250"
              width="250"
              alt="skyVector"
            />
            <div>
              airplane tail number: {this.state.airplane.tailNumber}, airplane
              model: {this.state.airplane.model}
            </div>
            <div>
              instructors name: {this.state.instructor.name}, instructors
              license number: {this.state.instructor.licenseNum}
            </div>
            <div>remarks: {this.state.remarks}</div>
            <div>
              SEL: {this.state.SEL}, MEL: {this.state.MEL}, takeoffs:
              {this.state.numOfTakeOffs}, landings:{this.state.numOfLandings}
            </div>
            <div>
              dayHrs:{this.state.dayHours}, nightHrs:{this.state.nightHours},
              simInst: {this.state.simInstruments}, actInst:{" "}
              {this.state.actInstruments}
            </div>
            <div>
              dualRec: {this.state.dualReceived}, PIC:{" "}
              {this.state.pilotInCommand}, asInst: {this.state.asInstructor}
            </div>
            <div>
              groundTrn: {this.state.groundTrainer}, crossCountry:{" "}
              {this.state.crossCountry}, totalHrs:{this.state.total}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FlightView);
