import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
      display: 'flex',
      flexDirection: 'column',
    //   width: "20%",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
    width: '90%',
  },
  input: {
    display: 'none',
  },
});

function Navigation(props) {
  const { classes } = props;

  return (
    <div>
      <MenuList className={classes.root} elevation={1}>
      <Link href='/'><MenuItem className={classes.button}>Home</MenuItem></Link>
      <Link href='/Flights'><MenuItem className={classes.button}>Flights</MenuItem></Link>
      <Link href='/Aircraft'><MenuItem className={classes.button}>Aircraft</MenuItem></Link>
      <Link href='/Instructors'><MenuItem className={classes.button}>Instructors</MenuItem></Link>
      <Link href='/Billing'><MenuItem className={classes.button}>Billing</MenuItem></Link>
      <Link href='/Settings'><MenuItem className={classes.button}>Settings</MenuItem></Link>
      </MenuList>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);

{/* <MenuList>
  <Link><MenuItem>Home</MenuItem></Link>
  <Link><MenuItem>Flights</MenuItem></Link>
  <Link><MenuItem>Aircraft</MenuItem></Link>
  <Link><MenuItem>Instructors</MenuItem></Link>
  <Link><MenuItem>Billing</MenuItem></Link>
  <Link><MenuItem>Settings</MenuItem></Link>
</MenuList> */}

// const Navigation= ()=>{
    //     return(
        //         <div>
        //             <ul>
        //                 <li><Link href='/'><a>Home</a></Link></li>
        //                 <li><Link href='/Flights'><a>Flights</a></Link></li>
        //                 <li><Link href='/Aircraft'><a>Aircraft</a></Link></li>
        //                 <li><Link href='/Instructors'><a>Instructors</a></Link></li>
        //                 <li><Link href='/billing'><a>Billing</a></Link></li>
        //                 <li><Link href='/Settings'><a>Settings</a></Link></li>
        //             </ul>
        //         </div>
        //     )
        // }
        // export default Navigation;