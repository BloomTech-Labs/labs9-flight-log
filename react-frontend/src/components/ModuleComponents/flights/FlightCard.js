import React, { Component } from "react";
import FlightEdit from "./FlightEdit";
import FlightDelete from "./FlightDelete";
import FlightView from "./FlightView";
import SkyVector from "./SkyVector";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = theme => ({
    root: {
      flexGrow: 1
    },
    control: {
      padding: theme.spacing.unit * 2
    },
    card: {
      height: 503
    },
    buttonrow: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexGrow: 1
    },
    titleField: {
      fontSize: 50
    },
    media: {
      height: 140
    },
    skyVector: {
      margin: 0,
      padding: 0
    }
  });

class FlightCard extends Component {
    constructor(props){
        super(props);
        this.state={
            flight:this.props.flight,
            airplanes:[],
            instructors: []
        }
    }
    componentDidMount(){
      const UID= this.props.UID;
      axios
        .get(
          `https://labs9-flight-log.herokuapp.com/pilots/access/${UID}/airplanes`
        )
        .then(response => {
          // console.log(response.data);
          this.setState({ airplanes: response.data });
        })
        .catch(err => console.log(err));
      axios
        .get(
          `https://labs9-flight-log.herokuapp.com/pilots/access/${UID}/instructors`
        )
        .then(response => {
          // console.log(response.data);
          this.setState({ instructors: response.data });
        })
        .catch(err => console.log(err));
    }

    render(){
        const {classes}=this.props
        return (
            <Card className={classes.card}>
                    <CardContent>
                      <Grid
                        container
                        className={classes.root}
                        justify="center"
                        alignItems="center"
                        direction="row"
                        spacing={16}
                      >
                        <Grid item xs={12}>
                          <TextField
                            id="flight-name"
                            value={this.state.flight.flightName}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              style: { fontSize: "24px" }
                            }}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="flight-airports"
                            label="Airports"
                            value={this.state.flight.airports}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="flight-date"
                            label="Date"
                            value={this.state.flight.flightDate.substring(0, 10)}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <SkyVector
                            id={this.state.flight.id}
                            skyVector={this.state.flight.skyVector}
                            className={classes.skyVector}
                          />
                        </Grid>
                        <Grid item xs={6} />
                        <Grid item xs={6}>
                          <TextField
                            id="flight-date"
                            label="Total"
                            value={this.state.flight.total}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        {/* BUTTON ROW*/}
                        <Grid item xs={12}>
                          {/* {" "} */}
                          {/* Start Button Row*/}
                          <Grid
                            container
                            className={classes.root}
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="row"
                            spacing={8}
                          >
                            <Grid item xs={4}>
                              <FlightEdit
                                {...this.props}
                                airplanes={this.state.airplanes}
                                instructors={this.state.instructors}
                                switcher={this.switcher}
                                flight={this.state.flight}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <FlightDelete
                                id={this.state.flight.id}
                                switcher={this.switcher}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <FlightView
                                airplanes={this.state.airplanes}
                                instructors={this.state.instructors}
                                flight={this.state.flight}
                              />
                            </Grid>
                          </Grid>
                        </Grid>{" "}
                        {/* End Button Row*/}
                      </Grid>
                    </CardContent>
                  </Card>
        )
    }
}
export default withStyles(styles)(FlightCard);