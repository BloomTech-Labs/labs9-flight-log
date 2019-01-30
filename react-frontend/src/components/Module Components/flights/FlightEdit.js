import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import NativeSelect from '@material-ui/core/NativeSelect';
// import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Grow } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

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
  }
});

class FlightEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      flightDate: "",
      flightName: "",
      airports: "",
      skyVector: "",
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
      instructor: "",
      openAir: false,
      openIns: false
    };
  }

  editFormHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    console.log("this.props.airplanes", this.props.airplanes);
    console.log("this.props.instructors", this.props.instructors);
    console.log("this.props.flight.airplanesID", this.props.flight);
    const airplane = this.props.airplanes.find(
      airplane => airplane.id === this.props.flight.airplanesID
    );
    console.log("airplane", airplane);
    const instructor = this.props.instructors.find(
      instructor => instructor.id === this.props.flight.instructorsID
    );
    console.log("instructor", instructor);
    this.setState({
      ...this.props.flight,
      airplanes: this.props.airplanes,
      instructors: this.props.instructors,
      airplane: airplane,
      instructor: instructor,
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitEditForm = () => {
    console.log("fired");
    const UID = localStorage.getItem("userID");
    console.log("uid", UID);
    const updatedFlight = {
      flightDate: this.state.flightDate,
      flightName: this.state.flightName,
      airports: this.state.airports,
      skyVector: this.state.skyVector,
      remarks: this.state.remarks,
      numOfTakeOffs: this.state.numOfTakeOffs,
      numOfLandings: this.state.numOfLandings,
      SEL: this.state.SEL,
      MEL: this.state.MEL,
      dayHours: this.state.dayHours,
      nightHours: this.state.nightHours,
      actInstruments: this.state.actInstruments,
      simInstruments: this.state.simInstruments,
      groundTrainer: this.state.groundTrainer,
      crossCountry: this.state.crossCountry,
      asInstructor: this.state.asInstructor,
      dualReceived: this.state.dualReceived,
      pilotInCommand: this.state.pilotInCommand,
      total: this.state.total,
      airplanesID: this.state.airplane.id,
      instructorsID: this.state.instructor.id
    };
    axios
      .put(
        `https://labs9-flight-log.herokuapp.com/flights/${this.state.id}`,
        updatedFlight
      )
      .then(response => {
        console.log(response);
        this.setState({
          open: false,
          flightDate: "",
          flightName: "",
          airports: "",
          skyVector: "",
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
          instructorsID: ""
        });
        console.log("this.props", this.props);
        this.props.switcher();
      })
      .catch(error => console.log(error));
  };

  handleOpenAir = () => {
    console.log("airplanes");
    this.setState({ openAir: true });
  };
  handleCloseAir = event => {
    // if (this.anchorEl.contains(event.target)) {
    //   return;
    // }
    this.setState({ openAir: false });
  };
  handleOpenIns = () => {
    console.log("instructors");
    this.setState({ openIns: true });
  };
  handleCloseIns = event => {
    // if (this.anchorE2.contains(event.target)) {
    //   return;
    // }
    this.setState({ openIns: false });
  };
  handleAirplane = airplane => event => {
    console.log(airplane);
    this.setState({ airplane: airplane });
    this.handleCloseAir();
  };
  handleInstructor = instructor => event => {
    console.log(instructor);
    this.setState({ instructor: instructor });
    this.handleCloseIns();
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
        >
          Edit
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Flight</DialogTitle>

          <DialogContent>
            <TextField
              type="string"
              margin="dense"
              // id="name"
              name="flightName"
              label="Name This Flight"
              value={this.state.flightName}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              margin="dense"
              // id="name"
              name="airports"
              label="Airports Visited"
              value={this.state.airports}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />
            <TextField
              type="string"
              margin="dense"
              // id="name"
              name="skyVector"
              label="SkyVector Link"
              value={this.state.skyVector}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />
            <FormControl className={classes.formControl}>
              {/* <TextField
                type="number"
                name="airplanesID"
                label="airplane id"
                value={this.state.airplanesID}
                onChange={this.editFormHandler}
                // required
                fullWidth
                variant="outlined"
              /> */}
              <Button
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                aria-owns={this.state.openAir ? "air-list-grow" : undefined}
                aria-haspopup="true"
                onClick={this.handleOpenAir}
              >
                {this.state.airplane.tailNumber || "tailnumber"}
                {"/ "}
                {this.state.airplane.model || "model"}
              </Button>
              <Popper
                open={this.state.openAir}
                anchorEl={this.anchorEl}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="air-list-grow"
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom"
                    }}
                  >
                    <Paper className={classes.paper}>
                      <ClickAwayListener onClickAway={this.handleCloseAir}>
                        <MenuList className={classes.menuList}>
                          {this.state.airplanes.map(airplane => (
                            <MenuItem
                              className={classes.menuItem}
                              onClick={this.handleAirplane(airplane)}
                            >
                              tailNumber:{airplane.tailNumber}, model:{" "}
                              {airplane.model}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </FormControl>
            <FormControl className={classes.formControl}>
              {/* <TextField
                type="number"
                name="instructorsID"
                label="instructor id, n/r"
                value={this.state.instructorsID}
                onChange={this.editFormHandler}
                // required
                fullWidth
                variant="outlined"
              /> */}
              <Button
                buttonRef={node => {
                  this.anchorE2 = node;
                }}
                aria-owns={this.state.openIns ? "ins-list-grow" : undefined}
                aria-haspopup="true"
                onClick={this.handleOpenIns}
              >
                {this.state.instructor.name || "name of instructor"}
                {"/ "}
                {this.state.instructor.licenseNum || "license Number"}
              </Button>
              <Popper
                open={this.state.openIns}
                anchorEl={this.anchorE2}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="ins-list-grow"
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom"
                    }}
                  >
                    <Paper className={classes.paper}>
                      <ClickAwayListener onClickAway={this.handleCloseIns}>
                        <MenuList className={classes.menuList}>
                          {this.state.instructors.map(instructor => (
                            <MenuItem
                              className={classes.menuItem}
                              onClick={this.handleInstructor(instructor)}
                            >
                              name: {instructor.name}, licenseNo.:{" "}
                              {instructor.licenseNum}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </FormControl>
            <FormControl>
              <span>date</span>
              <TextField
                type="date"
                name="flightDate"
                // label="date"
                value={this.state.flightDate}
                onChange={this.editFormHandler}
                // required
                fullWidth
                variant="outlined"
              />
            </FormControl>

            <TextField
              type="string"
              margin="dense"
              // id="name"
              name="remarks"
              label="Remarks, Procedures, Maneuvers"
              value={this.state.remarks}
              onChange={this.editFormHandler}
              fullWidth
              variant="outlined"
            />
            <TextField
              type="number"
              margin="dense"
              // id="name"
              name="numOfTakeOffs"
              label="number of take offs"
              value={this.state.numOfTakeOffs}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="numOfLandings"
              label="number of landings"
              value={this.state.numOfLandings}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="SEL"
              label="Airplane SEL"
              value={this.state.SEL}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="MEL"
              label="Airplane MEL"
              value={this.state.MEL}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="dayHours"
              label="day hours"
              value={this.state.dayHours}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="nightHours"
              label="night hours"
              value={this.state.nightHours}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="actInstruments"
              label="actual Instruments"
              value={this.state.actInstruments}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="simInstruments"
              label="simulated Instruments"
              value={this.state.simInstruments}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="groundTrainer"
              label="ground trainer"
              value={this.state.groundTrainer}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="crossCountry"
              label="cross country"
              value={this.state.crossCountry}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="asInstructor"
              label="as instructor"
              value={this.state.asInstructor}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="dualReceived"
              label="dual"
              value={this.state.dualReceived}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="pilotInCommand"
              label="PIC"
              value={this.state.pilotInCommand}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              type="number"
              margin="dense"
              // id="name"
              name="total"
              label="total hours"
              value={this.state.total}
              onChange={this.editFormHandler}
              // fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.submitEditForm} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

FlightEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlightEdit);
