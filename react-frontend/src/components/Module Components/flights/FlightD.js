import React from "react";

//flight delete modal,
//on yes call submitDelete, on no reroute back to edit page
const FlightD = props => (
  <div>
    <div>Are you sure you want to delete the flight?</div>
    <button
      onClick={() => {
        props.submitDelete();
      }}
    >
      Yes
    </button>
    <button>No</button>
  </div>
);

export default FlightD;
