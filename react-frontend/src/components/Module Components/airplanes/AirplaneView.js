import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

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
          <DialogTitle id="form-dialog-title">Airplane View</DialogTitle>

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
                  Tail Number: {this.state.tailNumber}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Airplane Type: {this.state.category}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Airplane make: {this.state.make}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Airplane Model: {this.state.model}
                </Grid>
                <Grid className={classes.image} sm={12}>
                  <img
                    src={this.state.imageName}
                    height="250"
                    width="250"
                    alt="airplaneImage"
                  />
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  SEL: {this.state.totalSEL}, MEL: {this.state.totalMEL}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Take Offs: {this.state.totalTakeOffs}, Landings:{" "}
                  {this.state.totalLandings}
                </Grid>
                <Grid className={classes.textField} sm={5}>
                  Day: {this.state.totalDay}, Night:{this.state.totalNight}
                </Grid>
                <Grid className={classes.textField} sm={8}>
                  Actual Inststruments: {this.state.totalActInstruments}
                </Grid>
                <Grid className={classes.textField} sm={8}>
                  Simulated Instruments: {this.state.totalSimInstruments}
                </Grid>
                <Grid className={classes.textField} sm={8}>
                  CrossCountry: {this.state.totalCrossCountry}, Dual Received:{" "}
                  {this.state.totalDualReceived}
                </Grid>
                <Grid className={classes.textField} sm={10}>
                  PIC:{this.state.totalPilotInCommand}, As Instructor:{" "}
                  {this.state.totalAsInstructor} Ground Trainer:
                  {this.state.totalGroundTrainer}
                </Grid>
                <Grid className={classes.textField} sm={4}>
                  Total Hours: {this.state.totalHours}
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AirplaneView);
