import Layout from "../components/Layout";
import FlightForm from '../components/FlightsForm';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

function Flights(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" >
            Add New Flight
          </Typography>
          <FlightForm style={{ flex: 1 }} />
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


