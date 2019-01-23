import React from "react";

//instructor delete modal,
//on yes call submitDelete, on no reroute back to edit page
const InstructorD = props => (
  <div>
    <div>Are you sure you want to delete instructor?</div>
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

export default InstructorD;
