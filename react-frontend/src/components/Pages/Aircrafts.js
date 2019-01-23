import React, { Component } from "react";
import Layout from "../Header component/Layout";
import AircraftView from '../Module Components/aircrafts/AircraftView'
import axios from "axios";
// import AircraftC from "../Module Components/aircrafts/AircraftC";
// import AircraftE from "../Module Components/aircrafts/AircraftE";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AirplaneForm from '../Module Components/aircrafts/AirplaneForm'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from "@material-ui/core";
import AricraftView from "../Module Components/aircrafts/AircraftView";
// import Paper from '@material-ui/core/Paper';
// const AircraftList = () => (
//   <Layout>
//     <div>
//       <p>Hello from aircraftList Next.js</p>
//     </div>
//   </Layout>
// );

//import aircrafts, this component will allow user to preform crud operations on aircrafts
// get all aircrafts referenced to user by id/name, create, update, delete
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  card: {
    maxWidth: 345,
    // marginBottom: 20,
    // minWidth: 200,
  },
  media: {
    height: 140,
  },
});

function aircraftView(props) {
  return <AricraftView/>;
}


class AircraftsList extends Component {
  constructor() {
    super();
    this.state = {
      aircraftsList: [],
    };
  }


  componentDidMount() {
    axios.get("https://labs9-flight-log.herokuapp.com/airplanes").then(response => {
      console.table(response.data);
      this.setState({ aircraftsList: response.data });
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Layout>
          <div>
            <Grid container className={classes.root} justify="flex-start" alignItems="flex-start" direction="row" spacing={16}>
            <AirplaneForm />
              {this.state.aircraftsList.map(aircraft => (
                <Grid item lg={2} xs={10} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>

                      <CardMedia
                        className={classes.media}
                        image="insert/img/here"
                        title="Aircraft Img"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{aircraft.make}</Typography>
                        <Typography gutterBottom variant="h5" component="h2">{aircraft.model}</Typography>
                        <Typography gutterBottom variant="h5" component="h2">{" "}
                          {aircraft.tailNumber}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
              
            </Grid>
          </div>
          {/* <AircraftC /> */}
          {/* <AircraftE /> */}
        </Layout>
      </React.Fragment>
    );
  }
}

AircraftsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AircraftsList);
