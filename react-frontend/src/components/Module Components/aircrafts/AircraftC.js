import React, { Fragment, Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  card: {
    height: "290px",
    maxWidth: 345
    // marginBottom: 20,
    // minWidth: 200,
  }
});

//aircraft creation component
class AircraftC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tailNumber: "",
      make: "",
      model: "",
      category: "",
      pilotsUID: ""
    };
  }
  //edit form handler
  editFormHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //submit add form
  submitAddForm = () => {
    console.log("added");
    //axios call to post
    const UID = localStorage.getItem("userID");
    const newAirplane = {
      ...this.state,
      make: this.state.make,
      model: this.state.model,
      tailNumber: this.state.tailNumber,
      category: this.state.category,
      pilotsUID: UID
    };
    this.setState({ newAirplane });
    axios.post();
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(files) {
    this.setState({
      files: files
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.submitAddForm}>
          <div>Input tail number: </div>
          <input
            type="text"
            name="tailNumber"
            placeholder="aircraft tail number"
            value={this.state.tailNumber}
            onChange={this.editFormHandler}
            required
          />
          <div>Input make: </div>
          <input
            type="text"
            name="make"
            placeholder="aircraft make"
            value={this.state.make}
            onChange={this.editFormHandler}
            required
          />
          <div>Input model: </div>
          <input
            type="text"
            name="model"
            placeholder="aircraft model"
            value={this.state.model}
            onChange={this.editFormHandler}
            required
          />
          <div>Input category: </div>
          <input
            type="text"
            name="category"
            placeholder="aircraft category"
            value={this.state.category}
            onChange={this.editFormHandler}
            required
          />
          <div>
            <button>Add Aircraft</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AircraftC;

// import React, { Component } from "react";
// import axios from "axios";

// //aircraft creation component
// class AircraftC extends Component {
//   constructor() {
//     super();
//     this.state = {
//       make: "",
//       model: "",
//       tailNumber: ""
//     };
//   }
//   //edit form handler
//   editFormHandler = e => {
//     console.log(e.target.name, e.target.value);
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   //submit add form
//   submitAddForm = () => {
//     console.log("added");
//     //axios call to post
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitAddForm}>
//           <div>Input make: </div>
//           <input
//             type="text"
//             name="make"
//             placeholder="aircraft make"
//             value={this.state.make}
//             onChange={this.editFormHandler}
//             required
//           />
//           <div>Input model: </div>
//           <input
//             type="text"
//             name="model"
//             placeholder="aircraft model"
//             value={this.state.model}
//             onChange={this.editFormHandler}
//             required
//           />
//           <div>Input tail number: </div>
//           <input
//             type="text"
//             name="tailNumber"
//             placeholder="aircraft tail number"
//             value={this.state.tailNumber}
//             onChange={this.editFormHandler}
//             required
//           />
{
  /* <div>Input category: </div>
<input
  type="text"
  name="category"
  placeholder="aircraft category"
  value={this.state.category}
  onChange={this.editFormHandler}
  required
/> */
}
//           <div>
//             <button>Add Aircraft</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default AircraftC;
