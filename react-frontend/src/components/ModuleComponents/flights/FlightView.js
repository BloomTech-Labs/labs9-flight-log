import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import SkyVector from "../../ModuleComponents/flights/SkyVector";
// import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';

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
    marginLeft: 15,
    marginRight: 15
    // border: "1px solid black",
    // borderRadius: 3,
    // boxShadow: "3px 3px 5px 6px #ccc"
  },
  image: {
    borderRadius: 3,
    marginTop: 10,
    // marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontFamily: "Roboto",
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  card: {
    // height: "290px",
    // maxWidth: 345
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
      <Fragment>
        <Button
          variant="outlined"
          className={classes.button}
          color="primary"
          aria-label="View"
          onClick={this.handleClickOpen}
          fullWidth
        >
          View
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
        >
          {/* <DialogTitle id="form-dialog-title">Flight View</DialogTitle> */}

          <DialogContent>
            <div style={{ padding: 10 }}>
              <Grid
                container
                className={classes.root}
                spacing={12}
                direction="row"
                justify="space-between"
                alignItems="stretch"
                
              >
                <Grid item className={classes.textField} md={5} sm={5}>
                <TextField
                    id="outlined-read-only-input"
                    label="Flight Name: "
                    defaultValue={this.state.flightName}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.textField} md={5}>
                <TextField
                    id="outlined-read-only-input"
                    label="Flight Date: "
                    defaultValue={this.state.flightDate.substring(0, 9)}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.textField} md={5}>
                <TextField
                    id="outlined-read-only-input"
                    label="Routes/ Airports: "
                    defaultValue={this.state.airports}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                   
                </Grid>
                <Grid item className={classes.image} md={12}>
                <SkyVector
                            id={this.props.flight.id}
                            skyVector={this.props.flight.skyVector}
                            className={classes.skyVector}
                          />
                </Grid>
                <Grid item className={classes.textField} md={5}>
                <TextField
                    id="outlined-read-only-input"
                    label="Tail Number:"
                    defaultValue={this.state.airplane.tailNumber}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.textField} md={5}>
                <TextField
                    id="outlined-read-only-input"
                    label="Airplane Model:"
                    defaultValue={this.state.airplane.model}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={5}>
                <TextField
                    id="outlined-read-only-input"
                    label="Instructors name:"
                    defaultValue={this.state.instructor.name}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={5}>
                <TextField
                    id="outlined-read-only-input"
                    label="License Number:"
                    defaultValue={this.state.instructor.licenseNum}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={12}>
                <TextField
                    id="outlined-read-only-input"
                    label="Remarks, Procedures, Maneuvers: "
                    defaultValue={this.state.remarks}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  /> 
                  
                </Grid>

                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="SEL:"
                    defaultValue={this.state.SEL}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="MEL:"
                    defaultValue={this.state.MEL}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Ground Trainer:"
                    defaultValue={this.state.groundTrainer}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Takeoffs:"
                    defaultValue={this.state.numOfTakeOffs}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Landings:"
                    defaultValue={this.state.numOfLandings}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                  
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="SimInst:"
                    defaultValue={this.state.simInstruments}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Day Hrs:"
                    defaultValue={this.state.dayHours}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                  
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Night Hrs:"
                    defaultValue={this.state.nightHours}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="ActInst:"
                    defaultValue={this.state.actInstruments}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>

                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Dual Recieved:"
                    defaultValue={this.state.dualReceived}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="PIC:"
                    defaultValue={this.state.pilotInCommand}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="As Instructor:"
                    defaultValue={this.state.asInstructor}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>

                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Cross Country:"
                    defaultValue={this.state.crossCountry}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                </Grid>
                <Grid item className={classes.textField} md={3}>
                <TextField
                    id="outlined-read-only-input"
                    label="Takeoffs:"
                    defaultValue={this.state.numOfTakeOffs}
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  /> 
                  </Grid>
                  <Grid item className={classes.textField} md={3}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Total Hours:"
                    defaultValue={this.state.total}
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
            </div>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(FlightView);

