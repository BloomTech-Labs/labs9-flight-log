import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import axios from "axios";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grid from "@material-ui/core/Grid";
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
  card: {
    height: 472
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
  },
  addCardContent: {
    textAlign: "center",
    marginTop: "40%"
  }
});

class FlightForm extends Component {
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
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleClickOpen = () => {
    // console.log("this.props", this.props);
    this.setState({ ...this.props, open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpenAir = () => {
    // console.log("airplanes");
    this.setState({ openAir: true });
  };
  handleCloseAir = () => {
    this.setState({ openAir: false });
  };
  handleOpenIns = () => {
    // console.log("instructors");
    this.setState({ openIns: true });
  };
  handleCloseIns = () => {
    this.setState({ openIns: false });
  };
  handleAirplane = airplane => () => {
    // console.log(airplane);
    this.setState({ airplane: airplane });
    this.handleCloseAir();
  };
  handleInstructor = instructor => () => {
    // console.log(instructor);
    this.setState({ instructor: instructor });
    this.handleCloseIns();
  };

  submitAddForm = () => {
    const UID = this.props.UID;
    const newFlight = {
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
      instructorsID: this.state.instructor.id,
      pilotsUID: UID
    };
    //http://localhost:9000/flights
    axios
      .post("https://labs9-flight-log.herokuapp.com/flights", newFlight)
      .then(response => {
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

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Card className={classes.card}>
          <div className={classes.addCardContent}>
            <Typography gutterBottom variant="h4" color="inherit" noWrap>
              Add Flight
            </Typography>
            <Fab
              color="primary"
              aria-label="Add"
              onClick={this.handleClickOpen}
            >
              <AddIcon />
            </Fab>
          </div>
        </Card>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Flight</DialogTitle>

          <DialogContent>
            <Grid
              container
              spacing={16}
              direction="row"
              justify="space-between"
              alignItems="stretch"
            >
              <Grid item sm={8} xs={12}>
                {/* <FormControl required fullWidth> */}
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
                {/* </FormControl> */}
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
                  label="Remarks, Procedures, Maneuvers"
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
                  label="Day Hours"
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
                  label="Night Hours"
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
                  label="Actual Instruments"
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
                  label="Simulated Instruments"
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
                  label="Ground Trainer"
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
                  label="Cross Country"
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
                  label="As Instructor"
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
                  label="Dual"
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
                  label="Total Hours"
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
            <Button onClick={this.submitAddForm} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

FlightForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlightForm);
