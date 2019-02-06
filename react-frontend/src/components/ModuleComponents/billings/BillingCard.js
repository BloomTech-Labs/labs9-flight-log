import React from 'react';
import { CardElement, /* injectStripe */ } from "react-stripe-elements";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    maxWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
};

function BillingCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <CardElement />
      </CardContent>
    </Card>
  );
}

BillingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BillingCard);