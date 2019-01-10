import Navigation from "../components/Navigation";
import { AST_PropAccess } from "terser";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FlightTheme from '../components/theme';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: FlightTheme.palette.primary.light,
    },
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  button: {
    marginRight: "15px", 
  },
  
});

function Layout(props) {
  const { classes } = props;
// const Layout = (props) => {
  return (
    <React.Fragment>
     <CssBaseline />
     <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Insert Name/Logo Here
            </Typography>
            <Button variant= "outlined">
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      <Grid container spacing={24}>
        <Navigation />
        {props.children}
      </Grid>
    </React.Fragment>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Layout);