import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Grow } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

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
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    border: "1px solid silver"
  },
  popper: {
    position: "inherit !important"
  }
});

class FlightEdit extends Component {
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
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleClickOpen = () => {
    const airplane = this.props.airplanes.find(
      airplane => airplane.id === this.props.flight.airplanesID
    );
    const instructor = this.props.instructors.find(
      instructor => instructor.id === this.props.flight.instructorsID
    );
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
        // console.log(response);
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
        this.props.switcher();
      })
      .catch(error => console.log(error));
  };

  handleOpenAir = () => {
    this.setState({ openAir: true });
  };
  handleCloseAir = () => {
    this.setState({ openAir: false });
  };
  handleOpenIns = () => {
    this.setState({ openIns: true });
  };
  handleCloseIns = () => {
    this.setState({ openIns: false });
  };
  handleAirplane = airplane => () => {
    this.setState({ airplane: airplane });
    this.handleCloseAir();
  };
  handleInstructor = instructor => () => {
    this.setState({ instructor: instructor });
    this.handleCloseIns();
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          variant="outlined"
          className={classes.button}
          color="default"
          aria-label="Edit"
          onClick={this.handleClickOpen}
          fullWidth
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
            <Grid
              container
              spacing={16}
              direction="row"
              justify="space-between"
              alignItems="stretch"
            >
              <Grid item sm={8} xs={12}>
              <TextField
                  autoFocus
                  type="string"
                  margin="dense"
                  name="flightName"
                  label="Flight Name:"
                  value={this.state.flightName}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="date"
                  name="flightDate"
                  value={this.state.flightDate}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={8} xs={6}>
                <TextField
                  autoFocus
                  type="string"
                  margin="dense"
                  name="airports"
                  label="Airports Visited"
                  value={this.state.airports}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  autoFocus
                  type="string"
                  margin="dense"
                  name="skyVector"
                  label="SkyVector Link"
                  value={this.state.skyVector}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <Button
                    className={classes.button}
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
                  <FormHelperText id="my-helper-text1">
                    This field is required.
                  </FormHelperText>
                  <Popper
                    className={classes.popper}
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
                            placement === "bottom"
                              ? "center top"
                              : "center bottom"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <Button
                    className={classes.button}
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
                    className={classes.popper}
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
                            placement === "bottom"
                              ? "center top"
                              : "center bottom"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  type="string"
                  margin="dense"
                  name="remarks"
                  label="Remarks, Procedures, Maneuvers:"
                  value={this.state.remarks}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="numOfTakeOffs"
                  label="Number Of Take Offs"
                  value={this.state.numOfTakeOffs}
                  onChange={this.editFormHandler}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="numOfLandings"
                  label="Number Of Landings"
                  value={this.state.numOfLandings}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="SEL"
                  label="Airplane SEL"
                  value={this.state.SEL}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="MEL"
                  label="Airplane MEL"
                  value={this.state.MEL}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="dayHours"
                  label="day hours"
                  value={this.state.dayHours}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="nightHours"
                  label="night hours"
                  value={this.state.nightHours}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="actInstruments"
                  label="actual Instruments"
                  value={this.state.actInstruments}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="simInstruments"
                  label="simulated Instruments"
                  value={this.state.simInstruments}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="groundTrainer"
                  label="ground trainer"
                  value={this.state.groundTrainer}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="crossCountry"
                  label="cross country"
                  value={this.state.crossCountry}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="asInstructor"
                  label="as instructor"
                  value={this.state.asInstructor}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="dualReceived"
                  label="dual"
                  value={this.state.dualReceived}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="pilotInCommand"
                  label="PIC"
                  value={this.state.pilotInCommand}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4} xs={6}>
                <TextField
                  autoFocus
                  type="number"
                  margin="dense"
                  name="total"
                  label="total hours"
                  value={this.state.total}
                  onChange={this.editFormHandler}
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
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
