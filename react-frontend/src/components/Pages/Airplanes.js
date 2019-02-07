import React, { Fragment, Component } from "react";
import Layout from "../HeaderComponents/Layout";
import axios from "axios";
import AirplaneForm from "../ModuleComponents/airplanes/AirplaneForm";
import AirplaneEdit from "../ModuleComponents/airplanes/AirplaneEdit";
import AirplaneDelete from "../ModuleComponents/airplanes/AirplaneDelete";
import AirplaneView from "../ModuleComponents/airplanes/AirplaneView";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import fire from "../../components/Config/fire";
import { CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const storage = fire.storage();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    height: 403
  },
  media: {
    height: "43%"
  },
  addCardContent: {
    textAlign: "center",
    marginTop: "40%"
  }
});

class AirplanesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airplanesList: [],
      url: [],
      isPaid: null,
      refreshed: false
    };
  }

  componentDidMount() {
    const UID = this.props.UID;
    console.log("from airplanes", this.props.UID);

    axios.get(`https://labs9-flight-log.herokuapp.com/pilots/access/${UID}`).then(response => {
      console.log("pilot response.data in airplane", response.data[0].isPaid);
      this.setState({ isPaid: response.data[0].isPaid });
      // if (response.data[0].isPaid === 1) {
      //   this.setState({
      //     isPaid: true
      //   });
      // }
    });
    //http://localhost:9000/airplanes/${UID}
    axios
      .get(`https://labs9-flight-log.herokuapp.com/airplanes/${UID}`)
      .then(response => {
        console.table("response.data to get airplanes image", response.data);
        let alteredList = response.data;
        alteredList.map(airplane => {
          const imagesRef = storage.ref(`${UID}`).child(airplane.imageName);
          return imagesRef.getDownloadURL().then(url => {
            console.log("url", url);
            airplane.imageName = url;
            this.setState({
              airplanesList: alteredList
              // refreshed: !this.state.refreshed
            });
            console.log("alteredList", alteredList);
          });
        });
      });
    //http://localhost:9000/airplanes/${UID}
    //https://labs9-flight-log.herokuapp.com/airplanes/${UID}
    // axios
    //   .get(`https://labs9-flight-log.herokuapp.com/airplanes/${UID}`)
    //   .then(response => {
    //     console.table(response.data);
    //     let alteredResponse = response.data.map(airplane => {
    //       airplane.imageName = airplane.imageName.split("+=+");
    //       return airplane;
    //     });

    //     let alteredResponse2 = alteredResponse.map(airplane => {
    //       //
    //       return (airplane = airplane.imageName.map(image => {
    //         let imageRef = storage
    //           .ref(`${UID}/${airplane.tailNumber}`)
    //           .child(image);
    //         // console.log(image);
    //         return imageRef.getDownloadURL().then(url => {
    //           image = url;
    //           alteredResponse.map((airplane, i) => {
    //             airplane.imageName = alteredResponse2[i];
    //             console.log("alteredResponse", airplane);
    //             return this.setState({ airplanesList: alteredResponse });
    //           });
    //           // console.log("alteredResponse", alteredResponse);
    //           return image;
    //         });
    //       }));
    //     });
    //   });
  }
  switcher = () => {
    console.log("fired from airplanes");
    this.componentDidMount();
  };

  render() {
    const { classes } = this.props;
    // if (this.state.refreshed) {
    //   this.componentDidMount();
    // }
    return (
      <Fragment>
        <Layout>
          {/* <div style={{ marginTop: "16px" }}> */}
            <Grid
              container
              className={classes.root}
              justify="flex-start"
              alignItems="flex-start"
              direction="row"
              spacing={8}
            >
              <Grid item lg={3} md={4} sm={6} xs={12}>
                {/* <AirplaneForm
                  {...this.props}
                  switcher={this.switcher}
                  UID={this.props.UID}
                /> */}
                {!this.state.isPaid && this.state.airplanesList.length > 0 ? (
                  <Card className={classes.card}>
                    <div className={classes.addCardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        color="inherit"
                        Wrap
                      >
                        Please purchase a subscription in the billing page to
                        add more airplanes.
                      </Typography>
                    </div>
                  </Card>
                ) : (
                  <AirplaneForm
                    {...this.props}
                    switcher={this.switcher}
                    UID={this.props.UID}
                  />
                )}
              </Grid>
              {this.state.airplanesList.map(airplane => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={
                        airplane.imageName || "https://via.placeholder.com/100"
                      }
                      title="airplane image"
                    />
                    {/* <div className={classes.media}>
                      {airplane.imageName.map(image => {
                        console.log("image", image.i);
                        return (
                          <img
                            src={image.i}
                            width="50"
                            height="50"
                            alt="imagelist"
                          />
                        );
                      })}
                    </div> */}
                    <CardContent>
                      <Grid
                        container
                        className={classes.root}
                        justify="flex-start"
                        alignItems="flex-start"
                        direction="row"
                        spacing={16}
                      >
                        {/* <Grid item xs={1}>{airplane.id}</Grid> */}
                        <Grid item xs={12}>
                          <TextField
                            id="airplane-tailnumber"
                            value={airplane.tailNumber}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              style: { fontSize: "24px" }
                            }}
                            variant="outlined"
                            fullWidth
                          />
                          {/* <Typography gutterBottom variant="h4" component="h2">
                            {airplane.tailNumber}
                          </Typography> */}
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            id="airplane-model"
                            value={airplane.make + " " + airplane.model}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            fullWidth
                          />
                          {/* <Typography gutterBottom variant="h5" component="h2">
                            {airplane.make} {airplane.model}
                          </Typography> */}
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            id="airplane-category"
                            value={airplane.category}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            fullWidth
                          />
                          {/* <Typography gutterBottom variant="h5" component="h2">
                            {airplane.category}
                          </Typography> */}
                        </Grid>
                        {/* BUTTON ROW*/}
                        <Grid item xs={12}>
                          <Grid
                            container
                            className={classes.root}
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="row"
                            spacing={8}
                          >
                            <Grid item xs={4}>
                              <AirplaneEdit
                                {...this.props}
                                switcher={this.switcher}
                                airplane={airplane}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <AirplaneDelete
                                id={airplane.id}
                                switcher={this.switcher}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <AirplaneView airplane={airplane} />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          {/* </div> */}
        </Layout>
      </Fragment>
    );
  }
}

AirplanesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirplanesList);
