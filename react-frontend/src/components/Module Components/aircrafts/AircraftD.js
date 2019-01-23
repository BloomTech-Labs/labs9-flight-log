import React from "react";

//aircraft delete modal,
//on yes call submitDelete, on no reroute back to edit page
const AircraftD = props => (
  <div>
    <div>Are you sure you want to delete the aircraft?</div>
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

export default AircraftD;
