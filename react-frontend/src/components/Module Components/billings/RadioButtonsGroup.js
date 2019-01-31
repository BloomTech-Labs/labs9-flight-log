import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 1,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtons extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      complete: false, 
      value: "", 
      isPaid: false,
    }
  }

  setAmount = ev => {
    console.log("setAmount", ev.target.value);
    this.setState({ value: ev.target.value});
    };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="subscription"
            name="subscription1"
            className={classes.group}
            value={this.state.value}
            onChange={this.setAmount}
          >
            <FormControlLabel 
              value="1999" 
              control={<Radio />} 
              label="$19.99 for 1 year" />

            <FormControlLabel 
              value="999" 
              control={<Radio />} 
              label="$9.99 for 1 month" />

          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);