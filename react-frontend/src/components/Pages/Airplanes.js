import React, { Component } from "react";
import Layout from "../Header component/Layout";
import axios from "axios";
import AirplaneForm from "../Module Components/airplanes/AirplaneForm";
import AirplaneEdit from "../Module Components/airplanes/AirplaneEdit";
import AirplaneDelete from "../Module Components/airplanes/AirplaneDelete";
import AirplaneView from "../Module Components/airplanes/AirplaneView";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import fire from "../../components/Config/fire";

const storage = fire.storage();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    height: 400
  },
  buttonrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1
  },
  button: {
    margin: "0 8px"
  },
  media: {
    height: 140
  }
});

class AirplanesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airplanesList: [],
      url: []
    };
  }

  componentDidMount() {
    const UID = this.props.UID;
    console.log("from airplanes", this.props.UID);
    //http://localhost:9000/airplanes/${UID}
    axios
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
          <div style={{ marginTop: "16px" }}>
            <Grid
              container
              className={classes.root}
              justify="flex-start"
              alignItems="flex-start"
              direction="row"
              spacing={16}
            >
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <AirplaneForm
                  {...this.props}
                  switcher={this.switcher}
                  UID={this.props.UID}
                />
              </Grid>
              {this.state.airplanesList.map(airplane => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Card className={classes.card}>
                    <CardContent>
                      <div>{airplane.id}</div>
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
                        Tail Number:
                        {airplane.tailNumber}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        Make:
                        {airplane.make}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        Model:
                        {airplane.model}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        Category:
                        {airplane.category}
                      </Typography>

                      <div className={classes.buttonrow}>
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

AirplanesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirplanesList);
