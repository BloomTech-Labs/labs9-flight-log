import React, { Component } from "react";
import axios from "axios";

//flight creation component
class FlightC extends Componenet {
  constructor() {
    super();
    this.state = {
      flightDate: "", //date
      flightName: "", //string
      airports: "", // string
      remarks: "", //string
      numOfTakeOffs: "", //int
      numOfLandings: "", //int
      SEL: "", //float
      MEL: "", //float
      dayHours: "", //float
      nightHours: "", //float
      actInstruments: "", //float
      simInstruments: "", //float
      groundTrainer: "", //float
      crossCountry: "", //float
      asInstructor: "", //float
      dualReceived: "", //float
      pilotInCommand: "", //float
      total: "" //float
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
          <div>Input date: </div>
          <input
            type="date"
            name="flightDate"
            placeholder="flight date"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input flight name: </div>
          <input
            type="string"
            name="flightName"
            placeholder="flight name"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input airport routes taken: </div>
          <input
            type="string"
            name="airports"
            placeholder="airport routes"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input remarks, procedures, maeuvers: </div>
          <input
            type="string"
            name="remarks"
            placeholder="remarks, procedures, maneuvers"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input number of take offs: </div>
          <input
            type="number"
            name="numOfTakeOffs"
            placeholder="input number of take offs"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input number of landings: </div>
          <input
            type="number"
            name="numOfLandings"
            placeholder="input number of landings"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input single engine land: </div>
          <input
            type="number"
            name="SEL"
            placeholder="single engine land"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input multi engine land: </div>
          <input
            type="number"
            name="MEL"
            placeholder="multi engine land"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input day hours: </div>
          <input
            type="number"
            name="dayHours"
            placeholder="day hours"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input night hours: </div>
          <input
            type="number"
            name="nightHours"
            placeholder="night hours"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input actual instruments: </div>
          <input
            type="number"
            name="actInstruments"
            placeholder="actual instruments"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input simulated instruments: </div>
          <input
            type="number"
            name="simInstruments"
            placeholder="simulated instruments"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input ground trainer: </div>
          <input
            type="number"
            name="groundTrainer"
            placeholder="ground trainer"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input cross country: </div>
          <input
            type="number"
            name="crossCountry"
            placeholder="cross country"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input as instructor: </div>
          <input
            type="number"
            name="asInstructor"
            placeholder=""
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input dual received: </div>
          <input
            type="number"
            name="dualReceived"
            placeholder="dual received"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input pilot in command: </div>
          <input
            type="number"
            name="pilotInCommand"
            placeholder="pilot in command"
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>Input total flight hour: </div>
          <input
            type="number"
            name="total"
            placeholder=""
            value={this.state.name}
            onChange={this.editFormHandler}
          />
          <div>
            <button>Add Flight</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FlightC;
