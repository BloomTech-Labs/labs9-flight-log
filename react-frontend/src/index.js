import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import HOC from "./HOC";
import { BrowserRouter as Router } from "react-router-dom";

require('dotenv').config({ path: '../.env'});


ReactDOM.render(
  <Router>
    < HOC/>
  </Router>,
  document.getElementById("root")
);
