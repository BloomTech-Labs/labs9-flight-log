import React, { Component } from "react";
import Layout from "../HeaderComponents/Layout";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import InstructorForm from "../ModuleComponents/instructors/InstructorForm.js";
import InstructorEdit from "../ModuleComponents/instructors/InstructorEdit";
import InstructorDelete from "../ModuleComponents/instructors/InstructorDelete";
import InstructorCard from "../ModuleComponents/instructors/instructorCard";
import PropTypes from "prop-types";

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
  buttonrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1
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

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
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
                <InstructorForm
                  {...this.props}
                  switcher={this.switcher}
                  UID={this.props.UID}
                />
              </Grid>

              {this.state.instructorsList.map(instructor => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InstructorCard instructor={instructor}/>
                </Grid>
              ))}
            </Grid>
          {/* </div> */}
        </Layout>
      </React.Fragment>
    );
  }
}

InstructorsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructorsList);
