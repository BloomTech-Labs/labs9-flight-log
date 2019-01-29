import React, { Component } from "react";
import Layout from "../Header component/Layout";
// import AircraftView from '../Module Components/aircrafts/AircraftView'
import axios from "axios";
// import AircraftC from "../Module Components/aircrafts/AircraftC";
// import AircraftE from "../Module Components/aircrafts/AircraftE";
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';
import AirplaneForm from "../Module Components/airplanes/AirplaneForm";
import AirplaneEdit from "../Module Components/airplanes/AirplaneEdit";
import AirplaneDelete from "../Module Components/airplanes/AirplaneDelete";
import AirplaneView from "../Module Components/airplanes/AirplaneView";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import fire from "../../components/Config/fire";
const storage = fire.storage();
// import { CssBaseline } from "@material-ui/core";
// import AircraftView from "../Module Components/aircrafts/AircraftView";
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
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    maxWidth: 345
    // marginBottom: 20,
    // minWidth: 200,
  },
  media: {
    height: 140
  }
});

// function aircraftView(props) {
//   return <AircraftView/>;
// }

class AirplanesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airplanesList: [],
      url: []
    };
  }

  componentDidMount() {
    const UID = localStorage.getItem("userID");
    axios
      //http://localhost:9000/airplanes
      .get(`https://labs9-flight-log.herokuapp.com/airplanes/${UID}`)
      .then(response => {
        console.table(response.data);
        let alteredList = response.data;
        alteredList.map(airplane => {
          const imagesRef = storage.ref(`${UID}`).child(airplane.imageName);
          return imagesRef.getDownloadURL().then(url => {
            console.log(url);
            airplane.imageName = url;
            this.setState({ airplanesList: alteredList });
          });
        });
        console.log(alteredList);
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
              <AirplaneForm {...this.props} switcher={this.switcher} />
              {this.state.airplanesList.map(airplane => (
                <Grid item lg={2} xs={10} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      {airplane.id}
                      <img
                        src={
                          airplane.imageName ||
                          "https://via.placeholder.com/100"
                        }
                        height="100"
                        width="100"
                        alt="airplaneImages"
                      />
                      <Typography gutterBottom variant="h5" component="h2">
                        tail_number:
                        {airplane.tailNumber}
                      </Typography>

                      <Typography gutterBottom variant="h5" component="h2">
                        make:
                        {airplane.make}
                      </Typography>

                      <Typography gutterBottom variant="h5" component="h2">
                        model:
                        {airplane.model}
                      </Typography>

                      <Typography gutterBottom variant="h5" component="h2">
                        category:
                        {airplane.category}
                      </Typography>

                      <AirplaneEdit
                        {...this.props}
                        switcher={this.switcher}
                        airplane={airplane}
                      />
                      <AirplaneDelete
                        id={airplane.id}
                        switcher={this.switcher}
                      />
                      <AirplaneView airplane={airplane} />
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

AirplanesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirplanesList);
