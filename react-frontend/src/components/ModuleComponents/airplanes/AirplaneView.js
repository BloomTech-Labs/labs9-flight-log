import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Transition, animated } from "react-spring";
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
    marginBottom: 15,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // border: "1px solid black",
    borderRadius: 3
    // boxShadow: "3px 3px 5px 6px #ccc"
  },
  topDiv: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  image: {
    borderRadius: 3,
    marginBottom: 15,
    display: "flex",
    justifyContent: "center"
    // boxShadow: "3px 3px 5px 6px #ccc"
  },
  dialogContent: {
    // width: "85%",
    display: "flex",
    justifyContent: "center"
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
  Total: {
    padding: 15,
    marginTop: 10
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
      <Fragment>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          aria-label="View Airplane"
          onClick={this.handleClickOpen}
          fullWidth
        >
          View
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth="sm"
        >
          <Transition
            native
            items={this.state.open}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <DialogTitle id="form-dialog-title">
                    Airplane View
                  </DialogTitle>

                  <DialogContent className={classes.dialogContent}>
                    <div style={{ padding: 10 }}>
                      <Grid
                        container
                        className={classes.root}
                        spacing={16}
                        direction="row"
                        // justify="space-between"
                        // alignItems="stretch"
                      >
                        <div className={classes.topDiv}>
                          <Grid className={classes.textField} sm={5}>
                            <TextField
                              id="outlined-read-only-input"
                              label="Tail Number:"
                              defaultValue={this.state.tailNumber}
                              // className={classes.textField}
                              margin="normal"
                              InputProps={{
                                readOnly: true
                              }}
                              variant="outlined"
                            />
                            {/* <Typography variant="subtitle2">Tail Number:</Typography>
                  <Typography variant="h6">{this.state.tailNumber}</Typography> */}
                          </Grid>
                          <Grid className={classes.textField} sm={5}>
                            <TextField
                              id="outlined-read-only-input"
                              label="Airplane Type:"
                              defaultValue={this.state.category}
                              // className={classes.textField}
                              margin="normal"
                              InputProps={{
                                readOnly: true
                              }}
                              variant="outlined"
                            />
                            {/* <Typography variant="subtitle2">Airplane Type:</Typography>
                  <Typography variant="h6">{this.state.category}</Typography> */}
                          </Grid>
                          <Grid className={classes.textField} sm={5}>
                            <TextField
                              id="outlined-read-only-input"
                              label="Airplane make:"
                              defaultValue={this.state.make}
                              // className={classes.textField}
                              margin="normal"
                              InputProps={{
                                readOnly: true
                              }}
                              variant="outlined"
                            />
                            {/* <Typography variant="subtitle2">Airplane make:</Typography>
                  <Typography variant="h6">{this.state.make}</Typography> */}
                          </Grid>
                          <Grid className={classes.textField} sm={5}>
                            <TextField
                              id="outlined-read-only-input"
                              label="Airplane Model:"
                              defaultValue={this.state.model}
                              // className={classes.textField}
                              margin="normal"
                              InputProps={{
                                readOnly: true
                              }}
                              variant="outlined"
                            />
                            {/* <Typography variant="subtitle2">Airplane Model:</Typography>
                  <Typography variant="h6">{this.state.model}</Typography> */}
                          </Grid>
                          <Grid className={classes.image} lg={12}>
                            <img
                              src={this.state.imageName}
                              height="250"
                              width="250"
                              alt="airplaneImage"
                            />
                          </Grid>
                        </div>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="SEL:"
                            defaultValue={this.state.totalSEL}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">SEL:</Typography>
                  <Typography variant="h6">{this.state.totalSEL}</Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="MEL:"
                            defaultValue={this.state.totalMEL}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">MEL:</Typography>
                  <Typography variant="h6">{this.state.totalMEL}</Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Take Off's:"
                            defaultValue={this.state.totalTakeOffs}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">Take Offs:</Typography>
                  <Typography variant="h6">
                    {this.state.totalTakeOffs}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Landings:"
                            defaultValue={this.state.totalLandings}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">Landings: </Typography>
                  <Typography variant="h6">
                    {this.state.totalLandings}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Day:"
                            defaultValue={this.state.totalDay}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">
                    Day: 
                  </Typography>
                  <Typography variant="h6">
                  {this.state.totalDay}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Night:"
                            defaultValue={this.state.totalNight}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">
                  Night:
                  </Typography>
                  <Typography variant="h6">
                  {this.state.totalNight}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Actual Instruments:"
                            defaultValue={this.state.totalActInstruments}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">
                    Actual Inststruments: 
                  </Typography>
                  <Typography variant="h6">
                  {this.state.totalActInstruments}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Simulated Instruments:"
                            defaultValue={this.state.totalSimInstruments}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">
                    Simulated Instruments: 
                  </Typography>
                  <Typography variant="h6">
                  {this.state.totalSimInstruments}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Cross Country:"
                            defaultValue={this.state.totalCrossCountry}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Dual Recieved:"
                            defaultValue={this.state.totalDualReceived}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">
                    CrossCountry: {this.state.totalCrossCountry}, Dual Received:{" "}
                    {this.state.totalDualReceived}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="PIC:"
                            defaultValue={this.state.totalPilotInCommand}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="As Instructor:"
                            defaultValue={this.state.totalAsInstructor}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid className={classes.textField} sm={2}>
                          <TextField
                            id="outlined-read-only-input"
                            label="Ground Trainer:"
                            defaultValue={this.state.totalGroundTrainer}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                          />
                          {/* <Typography variant="subtitle2">
                    PIC:{this.state.totalPilotInCommand}, As Instructor:{" "}
                    {this.state.totalAsInstructor} Ground Trainer:
                    {this.state.totalGroundTrainer}
                  </Typography> */}
                        </Grid>
                        <Grid className={classes.textField} sm={4}>
                          <Typography className={classes.Total} variant="h5">
                            Total Hours: {this.state.totalHours}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </DialogContent>
                </animated.div>
              ))
            }
          </Transition>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AirplaneView);
