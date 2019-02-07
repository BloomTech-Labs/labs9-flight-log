import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Transition, animated } from "react-spring";
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  dialog: {
    width: 600,
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
  },
  title: {
    marginRight: 15
  },
  takeOffs: {
    padding: "15px"
  },
  topModal: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: `3px solid ${theme.palette.divider}`
  },
  text: {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10
  },
  button: {
    marginRight: theme.spacing.unit
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
      totalHours: "",
      open: false
    };
  }

  handleClickOpen = () => {
    // const UID = localStorage.getItem("userID");
    const UID = this.props.UID;
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
          aria-label="Total Hours"
          onClick={this.handleClickOpen}
        >
          View Total Hours
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle  id="form-dialog-title">Flight Totals</DialogTitle> */}
          <Transition
            native
            items={this.state.open}
            from={{ opacity: 0, height: 300 }}
            enter={{ opacity: 1, height: 400 }}
            leave={{ opacity: 0, height: -600 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <DialogContent className={classes.dialog}>
                    <div className={classes.topModal}>
                      <Typography className={classes.title} variant="h6">
                        Airplane SEL: {this.state.totalSEL}
                      </Typography>
                      <Typography className={classes.title} variant="h6">
                        Airplane MEL: {this.state.totalMEL}
                      </Typography>
                    </div>
                    <div className={classes.container}>
                      <div className={classes.takeOffs}>
                        <Typography className={classes.text} variant="h6">
                          Takeoffs: {this.state.totalTakeOffs}
                        </Typography>

                        <Typography className={classes.text} variant="h6">
                          Landings: {this.state.totalLandings}
                        </Typography>

                        <Typography className={classes.text} variant="h6">
                          Day: {this.state.totalDay}
                        </Typography>

                        <Typography className={classes.text} variant="h6">
                          Night: {this.state.totalNight}
                        </Typography>
                      </div>
                      <div className={classes.takeOffs}>
                        <Typography className={classes.text} variant="h6">
                          Sim: {this.state.totalSimInstruments}
                        </Typography>

                        <Typography className={classes.text} variant="h6">
                          Act: {this.state.totalActInstruments}
                        </Typography>

                        <Typography className={classes.text} variant="h6">
                          Ground: {this.state.totalGroundTrainer}
                        </Typography>
                        <Typography className={classes.text} variant="h6">
                          Cross-Country: {this.state.totalCrossCountry}
                        </Typography>
                      </div>
                      <div className={classes.takeOffs}>
                        <Typography className={classes.text} variant="h6">
                          Dual: {this.state.totalDualReceived}
                        </Typography>
                        <Typography className={classes.text} variant="h6">
                          PIC: {this.state.totalPilotInCommand}
                        </Typography>

                        <Typography className={classes.text} variant="h6">
                          As Inst: {this.state.totalAsInstructor}
                        </Typography>
                      </div>
                      <Typography className={classes.text} variant="title">
                        Total Hrs: {this.state.totalHours}
                      </Typography>
                    </div>
                  </DialogContent>
                </animated.div>
              ))
            }
          </Transition>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(TotalsModal);
