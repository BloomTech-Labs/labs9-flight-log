import Layout from "../Header component/Layout";
import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import InstructorForm from "../Module Components/instructors/InstructorForm.js";
import InstructorEdit from "../Module Components/instructors/InstructorEdit";
import InstructorDelete from "../Module Components/instructors/InstructorDelete";
import InstructorView from "../Module Components/instructors/InstructorView";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    height: 375
  },
  content: {
    display: "grid",
    gridTemplateRows: "3fr, 1fr, 2fr, 3fr, 2fr",
    alignItems: "stretch",

    height: "100%"
  },
  contentLine: {
    // border:"3px solid orange"
  }
});
const UID = localStorage.getItem("userID");

class InstructorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorsList: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://labs9-flight-log.herokuapp.com/instructors/${UID}`)
      .then(response => {
        console.table(response.data);
        this.setState({ instructorsList: response.data });
      });
  }

  switcher = () => {
    console.log("fired");
    this.componentDidMount();
  };

  handleEditClick = () => {
    console.log("Open Edit Modal");
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
              <Grid item lg={4} md={6} sm={12}>
                <InstructorForm {...this.props} switcher={this.switcher} />
              </Grid>

              {this.state.instructorsList.map(instructor => (
                <Grid item lg={4} md={6} sm={12}>
                  <Card className={classes.card}>
                    <CardContent className={classes.content}>
                      {instructor.id}
                      <Typography
                        className={classes.contentLine}
                        gutterBottom
                        variant="h5"
                      >
                        name: {instructor.name}
                      </Typography>
                      <Typography
                        className={classes.contentLine}
                        gutterBottom
                        variant="h6"
                      >
                        LicNo: {instructor.licenseNum}
                      </Typography>
                      <Typography
                        className={classes.contentLine}
                        gutterBottom
                        variant="h5"
                      >
                        contact: {instructor.contactInfo}
                      </Typography>

                      <Typography
                        className={classes.contentLine}
                        gutterBottom
                        variant="h5"
                      >
                        notes: {instructor.notes}
                      </Typography>

                      <Typography
                        className={classes.contentLine}
                        gutterBottom
                        variant="h5"
                      >
                        rating: {instructor.ratings}
                      </Typography>
                      <div className={classes.buttonrow}>
                        <InstructorEdit
                          {...this.props}
                          switcher={this.switcher}
                          instructor={instructor}
                        />
                        <InstructorDelete
                          id={instructor.id}
                          switcher={this.switcher}
                        />
                        <InstructorView instructor={instructor} />
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

export default withStyles(styles)(InstructorsList);
