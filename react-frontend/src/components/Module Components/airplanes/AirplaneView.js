import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";

// import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
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

class AirplaneView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: "",
      tailNumer: "",
      make: "",
      mode: "",
      category: "",
      imageName: null,
      pilotsUID: "",
      //
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
    console.log(this.props.airplane.imageName);
    const id = this.props.airplane.id;
    const UID = localStorage.getItem("userID");
    //http://localhost:9000/airplanes
    axios
      .get(`https://labs9-flight-log.herokuapp.com/airplanes/${UID}/${id}`)
      .then(response => {
        console.log("response.data", response.data[0]);
        const data = response.data[0];
        this.setState({
          ...this.props.airplane,
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

    console.log(this.state);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  //   componentDidMount() {
  //     const UID = localStorage.getItem("userID");
  //     axios.get(`http://localhost:9000/airplanes/${UID}/${id}`).then(response => {
  //       console.log(response.data);
  //     });
  //   }
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
          <DialogTitle id="form-dialog-title">Airplane View</DialogTitle>

          <DialogContent>
            <div>
              {this.state.tailNumber}, {this.state.category}
            </div>
            <div>
              {this.state.make}, {this.state.model}
            </div>
            <img
              src={this.state.imageName}
              height="250"
              width="250"
              alt="airplaneImage"
            />
            <div>
              SEL: {this.state.totalSEL}, MEL: {this.state.totalMEL}, takeOffs:{" "}
              {this.state.totalTakeOffs}, landings: {this.state.totalLandings}
            </div>
            <div>
              Day: {this.state.totalDay}, Night:{this.state.totalNight},
              ActInst: {this.state.totalActInstruments}, simInst:{" "}
              {this.state.totalSimInstruments}
            </div>
            <div>
              CrossCountry: {this.state.totalCrossCountry}, Dual:{" "}
              {this.state.totalDualReceived}
              PIC:{this.state.totalPilotInCommand}, AsInstructor:{" "}
              {this.state.totalAsInstructor}
            </div>
            <div>
              GroundTrainer:{this.state.totalGroundTrainer}, Total Hours:{" "}
              {this.state.totalHours}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AirplaneView);
