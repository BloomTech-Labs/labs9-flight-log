import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
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
  },
  card: {
    height: "290px",
    maxWidth: 345
  }
});

class TotalsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTakeOffs: "",
      totalLandings: "",
      totalSEL: "",
      totalMEL: "",
      totalDay: "",
      totalNight: "",
      totalActInstruments: "",
      totalSimInstruments: "",
      totalGroundTrainer: "",
      totalCrossCountry: "",
      totalAsInstructor: "",
      totalDualReceived: "",
      totalPilotInCommand: "",
      totalHours: ""
    };
  }
  handleClickOpen = () => {
    const UID = localStorage.getItem("userID");
    axios
      //https://labs9-flight-log.herokuapp.com/flights
      //http://localhost:9000/flights
      .get(`https://labs9-flight-log.herokuapp.com/flights/${UID}/total`)
      .then(response => {
        const data = response.data[0];
        this.setState({
          open: true,
          totalTakeOffs: data.totalTakeOffs,
          totalLandings: data.totalLandings,
          totalSEL: data.totalSEL,
          totalMEL: data.totalMEL,
          totalDay: data.totalDay,
          totalNight: data.totalNight,
          totalActInstruments: data.totalActInstruments,
          totalSimInstruments: data.totalSimInstruments,
          totalGroundTrainer: data.totalGroundTrainer,
          totalCrossCountry: data.totalCrossCountry,
          totalAsInstructor: data.totalAsInstructor,
          totalDualReceived: data.totalDualReceived,
          totalPilotInCommand: data.totalPilotInCommand,
          totalHours: data.totalHours
        });
      });
    // this.setState({ ...this.props.instructor, open: true });
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
          View Total Hours
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Totals Modal</DialogTitle>

          <DialogContent>
            <div>
              Airplane SEL: {this.state.totalSEL}, Airplane MEL:{" "}
              {this.state.totalMEL}
            </div>
            <div>
              Takeoffs:{this.state.totalTakeOffs}, Landings:{" "}
              {this.state.totalLandings}, Day: {this.state.totalDay}, Night:{" "}
              {this.state.totalNight}
            </div>
            <div>
              sim: {this.state.totalSimInstruments}, Act:{" "}
              {this.state.totalActInstruments}, ground:{" "}
              {this.state.totalGroundTrainer}
            </div>
            <div>
              crossCountry: {this.state.totalCrossCountry}, dual:
              {this.state.totalDualReceived}, PIC:{" "}
              {this.state.totalPilotInCommand}
            </div>
            <div>
              As Inst: {this.state.totalAsInstructor}, Total Hrs:{" "}
              {this.state.totalHours}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(TotalsModal);
