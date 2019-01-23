import React, { Component } from "react";
import axios from "axios";
import AircraftD from "./AircraftD";

//aircraft edit component
class AircraftE extends Component {
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
  //submit edit form
  submitEditForm = () => {
    console.log("edited");
    //axios call to put
  };
  //submit delete
  submitDelete = () => {
    console.log("deleted");
    //axios call to delete
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitEditForm}>
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
            <button>Edit Aircraft</button>
          </div>
        </form>
        <div>{/* <AircraftD submitDelete = {this.submitDelete}/> */}</div>
      </div>
    );
  }
}

export default AircraftE;
