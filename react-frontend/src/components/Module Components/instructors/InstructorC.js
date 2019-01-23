import React, { Component } from "react";
import axios from "axios";

//instructor creation component
class InstructorC extends Component {
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
  editFormHandler = () => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //submit add form
  submitAddForm = () => {
    e.preventDefault();
    console.log("added");
    //axios call to post
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitAddForm}>
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
            <button>Add Instructor</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InstructorC;
