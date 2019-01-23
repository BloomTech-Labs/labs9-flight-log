import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      dense: {
        marginTop: 16,
      },
      menu: {
        width: 200,
      },
  });
  

 class FlightForm extends React.Component {
  state = {
    open: false,
    aircraft: '',
    instructor: '',
    flight: '',
    airport: '',
    remarks: '',
    sel: '',
    labelWidth: 0,
  };

//   componentDidMount() {
//         this.setState({
//             labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
//         });
//     }
  editFormHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { classes } = this.props;
    return (
        
        <div className={classes.root}>
        <Card className={classes.card}>
            <Typography variant="h6" color="inherit" noWrap>
              Add Flight
            </Typography>
        <Fab color="primary" aria-label="Add" onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>
        </Card>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit / Create Flight</DialogTitle>
          <DialogContent > 
          <TextField
              autoFocus
              type="text"
              margin="dense"
              id="name"
              label="Name This Flight"
              value={this.state.flight}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
             <TextField
              autoFocus
              type="text"
              margin="dense"
              id="name"
              label="Airports Visited"
              value={this.state.airport}
              onChange={this.editFormHandler}
              required
              fullWidth
              variant="outlined"
            />
            <div>
                <h1>SKYVECTOR HERE</h1>
            </div>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="aircraft-native-simple">Aircraft</InputLabel>
                  <Select
                      native
                      value={this.state.aircraft}
                      onChange={this.handleChange('aircraft')}
                      inputProps={{
                      name: 'aircraft',
                      id: 'aircraft-native-simple',
                      }}
                  >
                    <option value="" />
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="instructor-native-simple">Instructor</InputLabel>
                <Select
                    native
                    value={this.state.instructor}
                    onChange={this.handleChange('instructor')}
                    inputProps={{
                    name: 'instructor',
                    id: 'instructor-native-simple',
                    }}
                >
                    <option value="" />
                </Select>
                </FormControl>

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Remarks, Procedures, Maneuvers"
                    value={this.state.remarks}
                    onChange={this.editFormHandler}
                    fullWidth
                    variant="outlined"
                    />
               <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Airplane SEL"
                    value={this.state.sel}
                    onChange={this.editFormHandler}
                    // fullWidth
                    variant="outlined"
                    />
               <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Day"
                    // fullWidth
                    variant="outlined"
                    />
              <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Grnd Trainer"
                    // fullWidth
                    variant="outlined"
                    />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Cross Country"
                    // fullWidth
                    variant="outlined"
                    />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Night"
                    // fullWidth
                    variant="outlined"
                    />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="PIC"
                    // fullWidth
                    variant="outlined"
                    />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="No. Instr. App."
                    // fullWidth
                    variant="outlined"
                    />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Actual Instr."
                    // fullWidth
                    variant="outlined"
                    />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Dual Rec."
                    // fullWidth
                    variant="outlined"
                    />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="No. Ldg."
                    // fullWidth
                    variant="outlined"
                    />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Sim. Instr"
                    // fullWidth
                    variant="outlined"
                    />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Total"
                    // fullWidth
                    variant="outlined"
                    />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
 }


FlightForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(FlightForm);