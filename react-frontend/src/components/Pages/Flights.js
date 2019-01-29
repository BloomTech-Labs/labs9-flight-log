import React, { Component } from "react";
import Layout from "../Header component/Layout";
import axios from "axios";
import FlightForm from "../Module Components/flights/FlightsForm";
import FlightEdit from "../Module Components/flights/FlightEdit";
import FlightDelete from "../Module Components/flights/FlightDelete";
import FlightView from "../Module Components/flights/FlightView";
// import classNames from 'classnames';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from "@material-ui/core/styles";
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
// import Paper from '@material-ui/core';

const styles = theme => ({
  AddIcon: {},
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flightsList: []
    };
  }
  componentDidMount() {
    const UID = localStorage.getItem("userID");
    console.log(UID);
    axios
      .get(`https://labs9-flight-log.herokuapp.com/flights/${UID}`)
      .then(response => {
        console.table(response.data);
        this.setState({ flightsList: response.data });
      });
  }

  switcher = () => {
    console.log("fired");
    this.componentDidMount();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Layout>
          <div>
            <Grid
              container
              className={classes.root}
              justify="flex-start"
              alignItems="flex-start"
              direction="row"
              spacing={16}
            >
              <FlightForm {...this.props} switcher={this.switcher} />
              {this.state.flightsList.map(flight => (
                <Grid item lg={2} xs={10} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      {flight.id}
                      <Typography gutterBottom variant="h5" component="h2">
                        flight name: {flight.flightName}
                      </Typography>

                      <Typography gutterBottom variant="h5" component="h2">
                        flight date: {flight.flightDate}
                      </Typography>

                      <Typography gutterBottom variant="h5" component="h2">
                        flight route: {flight.airports}
                      </Typography>

                      <Typography gutterBottom variant="h5" component="h2">
                        flight hrs: {flight.total}
                      </Typography>
                      <div className={classes.buttonrow}>
                        <FlightEdit
                          {...this.props}
                          switcher={this.switcher}
                          flight={flight}
                        />
                        <FlightDelete id={flight.id} switcher={this.switcher} />
                        <FlightView flight={flight} />
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

Flights.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Flights);
