import React, { Component } from "react";
import Layout from "../HeaderComponents/Layout";
import axios from "axios";
import FlightForm from "../ModuleComponents/flights/FlightsForm";
import FlightEdit from "../ModuleComponents/flights/FlightEdit";
import FlightDelete from "../ModuleComponents/flights/FlightDelete";
import FlightView from "../ModuleComponents/flights/FlightView";
import SkyVector from "../ModuleComponents/flights/SkyVector";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    height: 472
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

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flightsList: [],
      airplanes: [],
      instructors: []
    };
  }
  componentDidMount() {
    const UID = this.props.UID;
    // console.log("from flights", UID);
    //https://labs9-flight-log.herokuapp.com/pilots/access/${UID}/airplanes
    //https://labs9-flight-log.herokuapp.com/pilots/access/${UID}/instructors
    // http://localhost:9000/pilots/access/${UID}/airplanes
    //http://localhost:9000/pilots/access/${UID}/instructors
    axios
      .get(
        `https://labs9-flight-log.herokuapp.com/pilots/access/${UID}/airplanes`
      )
      .then(response => {
        // console.log(response.data);
        this.setState({ airplanes: response.data });
      });
    axios
      .get(
        `https://labs9-flight-log.herokuapp.com/pilots/access/${UID}/instructors`
      )
      .then(response => {
        // console.log(response.data);
        this.setState({ instructors: response.data });
      });

    axios
      .get(`https://labs9-flight-log.herokuapp.com/flights/${UID}`)
      .then(response => {
        // console.table(response.data);
        this.setState({ flightsList: response.data });
      });
  }
  switcher = () => {
    // console.log("fired");
    this.componentDidMount();
  };

  render() {
    const { classes, headerIsHidden, ...other } = this.props;

    return (
      <React.Fragment>
        <Layout UID={this.props.UID}>
          {/* <div style={{ marginTop: "16px" }}> */}

          <Grid
            container
            className={classes.root}
            justify="flex-start"
            alignItems="flex-start"
            direction="row"
            spacing={8}
          >
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <FlightForm
                {...other}
                airplanes={this.state.airplanes}
                instructors={this.state.instructors}
                switcher={this.switcher}
                UID={this.props.UID}
              />
            </Grid>

            {this.state.flightsList.map(flight => (
              <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={flight.id}>
                <Card className={classes.card}>
                  <CardContent>
                    <Grid
                      container
                      className={classes.root}
                      justify="center"
                      alignItems="center"
                      direction="row"
                      spacing={8}
                    >
                      <Grid item xs={12}>
                        <TextField
                          id="flight-name"
                          value={flight.flightName}
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
                          value={flight.airports}
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
                          value={flight.flightDate.substring(0, 10)}
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
                          id={flight.id}
                          skyVector={flight.skyVector}
                          className={classes.skyVector}
                        />
                      </Grid>
                      <Grid item xs={6} />
                      <Grid item xs={6}>
                        <TextField
                          id="flight-date"
                          label="Total"
                          value={flight.total}
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
                        {" "}
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
                              {...other}
                              airplanes={this.state.airplanes}
                              instructors={this.state.instructors}
                              switcher={this.switcher}
                              flight={flight}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <FlightDelete
                              id={flight.id}
                              switcher={this.switcher}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <FlightView
                              airplanes={this.state.airplanes}
                              instructors={this.state.instructors}
                              flight={flight}
                            />
                          </Grid>
                        </Grid>
                      </Grid>{" "}
                      {/* End Button Row*/}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* </div> */}
        </Layout>
      </React.Fragment>
    );
  }
}

Flights.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Flights);
