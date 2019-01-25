import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HOC from "./HOC";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    < HOC/>
  </Router>,
  document.getElementById("root")
);
