import React, { Component } from "react";
import Layout from "../Header component/Layout";
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
import PropTypes from "prop-types";

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

class InstructorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorsList: []
    };
  }

  componentDidMount() {
    const UID = this.props.UID;
    console.log("from instructor", UID);
    //http://localhost:9000/instructors/${UID}
    //https://labs9-flight-log.herokuapp.com/instructors/${UID}
    axios.get(`https://labs9-flight-log.herokuapp.com/instructors/${UID}`).then(response => {
      console.table(response.data);
      this.setState({ instructorsList: response.data });
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
                <InstructorForm
                  {...this.props}
                  switcher={this.switcher}
                  UID={this.props.UID}
                />
              </Grid>

              {this.state.instructorsList.map(instructor => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Card className={classes.card}>
                    <CardContent>
                      {instructor.id}

                      <Typography gutterBottom variant="h5" component="h2">
                        Name: {instructor.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        License Number: {instructor.licenseNum}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        Contact Info: {instructor.contactInfo}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        Notes: {instructor.notes}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        Rating: {instructor.ratings}
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

InstructorsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructorsList);
