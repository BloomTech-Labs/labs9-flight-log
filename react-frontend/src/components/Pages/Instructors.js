import Layout from "../Header component/Layout";
import React, { Component } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

class InstructorsList extends Component {
  constructor() {
    super();
    this.state = {
      instructorsList: []
    };
  }
  componentDidMount() {
    axios.get("https://labs9-flight-log.herokuapp.com/instructors").then(response => {
      console.table(response.data);
      this.setState({ instructorsList: response.data });
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Layout>
          <Grid container className={classes.root} justify="flex-start" alignItems="flex-start" direction="row" spacing={16}>
            <div>
              {this.state.instructorsList.map(instructor => (
                <Grid item lg={2} sm={1}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">name: {instructor.name}</Typography>
                      <Typography gutterBottom variant="h5" component="h2">licNo: {instructor.licenseNum}</Typography>
                      <Typography gutterBottom variant="h5" component="h2">contact:{" "}{instructor.contactInfo}</Typography>
                      <Typography gutterBottom variant="h5" component="h2">notes: {instructor.notes}</Typography>
                      <Typography gutterBottom variant="h5" component="h2">ratings:{" "}{instructor.ratings}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </div>
            {/* <InstructorC /> */}
            {/* <InstructorE /> */}
          </Grid>
        </Layout>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InstructorsList);
