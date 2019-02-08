import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

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
    borderRadius: 3
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
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: 5
  },
  dialogContent: {
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
    // padding: 15,
    // marginTop: 10
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
        // console.log("response.data", response.data[0]);
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
          variant="outlined"
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
                    <Grid
                      container
                      spacing={8}
                      direction="row"
                      justify="space-between"
                      alignItems="stretch"
                    >
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Tail Number:"
                          defaultValue={this.state.tailNumber}
                          margin="dense"
                          InputProps={{
                            readOnly: true,
                            style: { fontSize: "24px" }
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Airplane make:"
                          defaultValue={
                            this.state.make + " " + this.state.model
                          }
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Airplane Type:"
                          defaultValue={this.state.category}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CardMedia
                          className={classes.media}
                          image={`${this.state.imageName}`}
                          title="Picture of airplane"
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="SEL:"
                          defaultValue={this.state.totalSEL}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="MEL:"
                          defaultValue={this.state.totalMEL}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="TO's:"
                          defaultValue={this.state.totalTakeOffs}
                          // className={classes.textField}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Landings:"
                          defaultValue={this.state.totalLandings}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Day:"
                          defaultValue={this.state.totalDay}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Night:"
                          defaultValue={this.state.totalNight}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Act. Inst.:"
                          defaultValue={this.state.totalActInstruments}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Sim. Inst.:"
                          defaultValue={this.state.totalSimInstruments}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="X-Cntry:"
                          defaultValue={this.state.totalCrossCountry}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Dual Rec.:"
                          defaultValue={this.state.totalDualReceived}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="PIC:"
                          defaultValue={this.state.totalPilotInCommand}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="As Inst.:"
                          defaultValue={this.state.totalAsInstructor}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Grnd Trn:"
                          defaultValue={this.state.totalGroundTrainer}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        <TextField
                          error
                          id="outlined-read-only-input"
                          label="Tot. Hrs:"
                          defaultValue={this.state.totalHours}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
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
