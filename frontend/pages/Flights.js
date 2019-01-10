import Layout from "../components/Layout";

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


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

function Landing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Insert Name/Logo Here
          </Typography>
          <Button color="primary" variant="outlined">
            Sign Out
          </Button>
        </Toolbar>
      </AppBar> */}
      <Layout>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Add New Flight
          </Typography>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
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

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);

// const FlightList = () => (
//   <Layout>
//     <div>
//       <p>Hello from flightList Next.js</p>
//     </div>
//   </Layout>
// );

// export default FlightList;
