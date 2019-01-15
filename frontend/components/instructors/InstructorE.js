import React, { Component } from "react";
import axios from "axios";
import InstructorD from "./InstructorD";

//instructor edit component
class InstructorE extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      licenseNum: "",
      contactInfo: "",
      notes: "",
      ratings: ""
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
    e.preventDefault();
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
          <div>Input name:</div>
          <input
            type="text"
            name="name"
            placeholder="instructor's name"
            value={this.state.name}
            onChange={this.editFormHandler}
            required
          />
          <div>Input license number:</div>
          <input
            type="text"
            name="licenseNum"
            placeholder="instructor's license number"
            value={this.state.licenseNum}
            onChange={this.editFormHandler}
            required
          />
          <div>Input contact info:</div>
          <input
            type="text"
            name="contactInfo"
            placeholder="instructor's contact info"
            value={this.state.contactInfo}
            onChange={this.editFormHandler}
            required
          />
          <div>Input notes: </div>
          <input
            type="text"
            name="notes"
            placeholder="notes"
            value={this.state.notes}
            onChange={this.editFormHandler}
          />
          <div>Input ratings: </div>
          <input
            type="text"
            name="ratings"
            placeholder="ratings"
            value={this.state.ratings}
            onChange={this.editFormHandler}
          />
          <div>
            <button>Edit Instructor</button>
          </div>
        </form>
        <div>{/* <InstructorD submitDelete = {this.submitDelete}/> */}</div>
      </div>
    );
  }
}

export default InstructorE;
