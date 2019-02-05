import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import HOC from "./HOC";
import { BrowserRouter as Router } from "react-router-dom";

import theme from './components/Styles/theme';

require('dotenv').config({ path: '../.env'});



ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <HOC/>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
