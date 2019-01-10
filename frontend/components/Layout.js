import Navigation from "../components/Navigation";
import { AST_PropAccess } from "terser";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function Layout(props) {
  const { classes } = props;
// const Layout = (props) => {
  return (
    <div>
      <Grid container spacing={24}>
        <Navigation />
        {props.children}
      </Grid>
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Layout);