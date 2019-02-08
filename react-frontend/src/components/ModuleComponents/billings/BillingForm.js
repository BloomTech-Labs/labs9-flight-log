import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 400,
    width: 335
  },
  root: {
    display: "flex",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit * 1
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class BillingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false,
      value: "",
      isPaid: false,
      pilotID: this.props.id
    };

    this.submit = this.submit.bind(this);
  }

  setAmount = ev => {
    //console.log("setAmount", ev.target.value);
    //console.log("billing pilotid", this.state.pilotID);
    this.setState({ value: ev.target.value });
  };

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let amount = await this.state.value;

    let response = await fetch(
      "https://labs9-flight-log.herokuapp.com/charge",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token.id, amount })
      }
    );
    //console.log("inside billing form pilot id:", this.state.pilotID);
    //console.log("url", `https://labs9-flight-log.herokuapp.com/pilots/${this.state.pilotID}`)
    
    if (response.ok) {
      this.setState({ complete: true, isPaid: true });
      let pilot = {
        isPaid: true
      };
      axios
        .put(
          //http://localhost:9000/pilots/${this.state.pilotID}
          //https://labs9-flight-log.herokuapp.com/pilots/${this.state.id}
          //`http://localhost:9000/pilots/${this.state.pilotID}`,
         `https://labs9-flight-log.herokuapp.com/pilots/${this.state.pilotID}`,
          pilot
        )
        .then(response => {
          // console.log(response);
          //console.log("isPaid status 89", this.state.isPaid)
        })
        .catch(error => {
          console.log(error)
        });
    }
  }

  render() {
    const { classes } = this.props;

    if (this.state.complete) return <h1>Purchase Complete!</h1>;

    return (
      <div>
        <Paper className={classes.paper}>
          <Typography variant="title" align="left">
            Payment Info
          </Typography>

          <div style={{ marginTop: "24px" }}>
            <CardElement />
          </div>

          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
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
                  label="$19.99 for 1 year"
                />
                <FormControlLabel
                  value="999"
                  control={<Radio />}
                  label="$9.99 for 1 month"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.submit}
          >
            Buy Now
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(injectStripe(BillingForm));
