import React, {Fragment, Component } from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


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
 
class AirplaneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tail: '',
            files: [],
            labelWidth: 0,
        };
    }

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
 
    handleChange(files){
        this.setState({
          files: files
        });
      }
 
    render() {

        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h6" color="inherit" noWrap>
                    Add Aircraft
                </Typography>
                <Fab color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                    <AddIcon />
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Airplane:</DialogTitle>
                    <DialogContent>
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
                    <option value="N" />
                </Select>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tail Number"
                        value={this.state.tail}
                        onChange={this.editFormHandler}
                        required
                        variant="outlined"
                        />
                    <DropzoneArea 
                        onChange={this.handleChange.bind(this)}
                        showPreviews={true}
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default withStyles(styles)(AirplaneForm);