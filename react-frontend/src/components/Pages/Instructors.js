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
    // console.log("from instructor", UID);
    //http://localhost:9000/instructors/${UID}
    //https://labs9-flight-log.herokuapp.com/instructors/${UID}
    axios
      .get(`https://labs9-flight-log.herokuapp.com/instructors/${UID}`)
      .then(response => {
        // console.table(response.data); //only shows if an instructor(s) exists
        this.setState({ instructorsList: response.data });
      });
  }
  switcher = () => {
    // console.log("fired");
    this.componentDidMount();
  };

  render() {
    const { classes, headerIsHidden, ...other } = this.props;

    return (
      <React.Fragment>
        <Layout UID={this.props.UID}>
          {/* <div style={{ marginTop: "16px" }}> */}
          <Grid
            container
            className={classes.root}
            justify="flex-start"
            alignItems="flex-start"
            direction="row"
            spacing={8}
          >
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <InstructorForm
                {...other}
                switcher={this.switcher}
                UID={this.props.UID}
              />
            </Grid>

            {this.state.instructorsList.map(instructor => (
              <Grid
                item
                xl={2}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={instructor.id}
              >
                <Card className={classes.card}>
                  <CardContent>
                    <Grid
                      container
                      className={classes.root}
                      justify="flex-start"
                      alignItems="flex-start"
                      direction="row"
                      spacing={8}
                    >
                      <Grid item xs={12}>
                        <TextField
                          id="instructor-name"
                          label="Name"
                          defaultValue={instructor.name}
                          className={classes.textField}
                          margin="dense"
                          InputProps={{
                            readOnly: true,
                            style: { fontSize: "24px" }
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="instructor-license"
                          label="License No."
                          defaultValue={instructor.licenseNum}
                          className={classes.textField}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="instructor-ratings"
                          label="Ratings"
                          defaultValue={instructor.ratings}
                          className={classes.textField}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="instructor-contact"
                          label="Contact"
                          defaultValue={instructor.contactInfo}
                          className={classes.textField}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          multiline
                          rows="2"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="instructor-notes"
                          label="Notes"
                          defaultValue={instructor.notes}
                          className={classes.textField}
                          margin="dense"
                          InputProps={{
                            readOnly: true
                          }}
                          variant="outlined"
                          multiline
                          rows="2"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          className={classes.root}
                          justify="flex-start"
                          alignItems="flex-start"
                          direction="row"
                          spacing={8}
                        >
                          <Grid item xs={6}>
                            <InstructorEdit
                              {...other}
                              switcher={this.switcher}
                              instructor={instructor}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <InstructorDelete
                              id={instructor.id}
                              switcher={this.switcher}
                            />
                          </Grid>
                          <Grid item xs={6} />
                        </Grid>
                        <Grid item xs={6} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
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
