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
  // '@global': {
  //   body: {
  //     backgroundColor: theme.palette.common.white,
  //   },
  // },
  fab: {
    margin: theme.spacing.unit,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 75,
      height: 75,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  AddIcon: {
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
  // Button: {
  //   marginRight: "15px",
  // },
  // appBar: {
  //   position: 'relative',
  // },
  // toolbarTitle: {
  //   flex: 1,
  // },
  layout: {
    display: 'flex',
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    display: "flex",
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.spacing.unit * 14,
    // marginTop: '120px',
    padding: `${theme.spacing.unit * 0}px 0 ${theme.spacing.unit * 0}px`,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
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
                  {this.state.flightsList.map(flight => (
              <Grid item lg={5} sm={1} md={2}>
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
              <FlightForm style={{ flex: 1 }} />
            </Grid>
            </div>
            {/* End hero unit */}
          </main>
          </Layout>
          {/* Footer */}
          <footer className={classNames(classes.footer, classes.layout)}>
          </footer>
          {/* End footer */}
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


