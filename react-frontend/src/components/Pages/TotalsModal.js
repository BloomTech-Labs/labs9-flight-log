import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import { Transition, animated } from "react-spring";
import axios from "axios";
// import { Divider } from "@material-ui/core";

const styles = theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap"
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
    // width: 600,
    // display: "flex",
    // flexWrap: "wrap"
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
  },
  viewDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  viewMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
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
        <div className={classes.viewDesktop}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            aria-label="Total Hours"
            onClick={this.handleClickOpen}
          >
            View Total Hours
          </Button>
        </div>
        <div className={classes.viewMobile}>
          View Total Hours
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle  id="form-dialog-title">Flight Totals</DialogTitle> */}
          <Transition
            native
            items={this.state.open}
            from={{ opacity: 0, height: 400 }}
            enter={{ opacity: 1, height: 450 }}
            leave={{ opacity: 0, height: -600 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <DialogContent className={classes.dialog}>
                  <Grid
                      container
                      className={classes.root}
                      spacing={12}
                      direction="row"
                      justify="space-evenly"
                      alignItems="stretch"

                      >
                    <Grid item md={4} >
                    <TextField
                    id="outlined-read-only-input"
                    label="Airplane SEL:"
                    defaultValue={this.state.totalSEL}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                  </Grid>
                   <Grid item md={4} >
                  <TextField
                    id="outlined-read-only-input"
                    label="Airplane MEL:"
                    defaultValue={this.state.totalMEL}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                    </Grid>
                    </Grid>
                    <Grid
                      container
                      className={classes.root}
                      spacing={16}
                      // direction="row"
                      justify="center"
                      // alignItems="stretch"

                      >
                      <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Takeoffs:"
                          defaultValue={this.state.totalTakeOffs}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Landings:"
                          defaultValue={this.state.totalLandings}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Day:"
                          defaultValue={this.state.totalDay}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Night:"
                          defaultValue={this.state.totalNight}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                      
                        <Grid item md={2}>
                      <TextField
                          id="outlined-read-only-input"
                          label="Sim:"
                          defaultValue={this.state.totalSimInstruments}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Act:"
                          defaultValue={this.state.totalActInstruments}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Ground:"
                          defaultValue={this.state.totalGroundTrainer}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Cross-Country:"
                          defaultValue={this.state.totalCrossCountry}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                      
                        <Grid item md={2}>
                      <TextField
                          id="outlined-read-only-input"
                          label="Dual:"
                          defaultValue={this.state.totalDualReceived}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="PIC:"
                          defaultValue={this.state.totalPilotInCommand}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                        </Grid>
                        <Grid item md={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="As Inst:"
                          defaultValue={this.state.totalAsInstructor}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={4}>
                      <TextField
                          id="outlined-read-only-input"
                          label="Total Hrs:"
                          defaultValue={this.state.totalHours}
                          // className={classes.textField}
                          margin="normal"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                          error
                        />
                        </Grid>
                    </Grid>
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
