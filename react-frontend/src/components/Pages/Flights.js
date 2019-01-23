import Layout from "../Header component/Layout";
import FlightForm from "../Module Components/flights/FlightsForm";
import axios from "axios";
import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core';


const styles = theme => ({
  AddIcon: {
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

});

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flightsList: []
    };
  }
  componentDidMount() {
    axios.get("https://labs9-flight-log.herokuapp.com/flights").then(response => {
      console.table(response.data);
      this.setState({ flightsList: response.data });
    });
  }
    render() {

      const { classes } = this.props;
      return (
        <React.Fragment>
          <CssBaseline />
          <Layout>
          <main className={classes.layout}>
            {/* Hero unit */}
            <div className={classes.heroContent}>
            {/* <Typography component="h1" variant="h2" align="center" color="textPrimary" >
                Add New Flight
              </Typography> */}
                <Grid container className={classes.root} justify="flex-start" alignItems="flex-start" direction="row" spacing={16}>
                <FlightForm/>
                  {this.state.flightsList.map(flight => (
              <Grid item lg={2} xs={10} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="insert/img/here"
                        title="SkyVector Img"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{flight.flightName}</Typography>
                        <Typography gutterBottom variant="h5" component="h2">{flight.airports}</Typography> 
                        <Typography gutterBottom variant="h5" component="h2">{flight.SEL}</Typography>
                        <Typography gutterBottom variant="h5" component="h2">{flight.flightDate}</Typography> 
                        </CardContent>
                      </CardActionArea>
                    </Card>
              </Grid>
                  ))}

            </Grid>
            </div>
            {/* End hero unit */}
          </main>
          </Layout>
        </React.Fragment>
       );
      }
    }


Flights.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Flights);

// const FlightList = () => (
//   <Layout>
//     <div>
//       <p>Hello from flightList Next.js</p>
//     </div>
//   </Layout>
// );

// export default FlightList;


