import React, { Component } from "react";
import axios from "axios";

//aircraft creation component
class AircraftC extends Component {
  constructor() {
    super();
    this.state = {
      make: "",
      model: "",
      tailNumber: ""
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
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitAddForm}>
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
          <div>Input tail number: </div>
          <input
            type="text"
            name="tailNumber"
            placeholder="aircraft tail number"
            value={this.state.tailNumber}
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
