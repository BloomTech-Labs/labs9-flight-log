import React, { Component } from "react";
import "./App.css";
// import Layout from './components/Header component/Layout';
import SignIn from "./components/Pages/SignIn";
import Airplanes from "./components/Pages/Airplanes";
import Billing from "./components/Pages/Billing";
import Flights from "./components/Pages/Flights";
import Instructors from "./components/Pages/Instructors";
import Landing from "./components/Pages/Landing";
import Settings from "./components/Pages/Settings";
import SignUp from "./components/Pages/SignUp";

// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: ""
    };
  }

  updateUID = UID => {
    this.setState({
      UID: UID
    });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Landing />} />
        <Route
          exact
          path="/Airplanes"
          render={props => <Airplanes {...props} />}
        />
        <Route 
          exact path="/Billing" 
          render={props => <Billing {...props} />} />
        <Route
          exact
          path="/Instructors"
          render={props => <Instructors {...props} />}
        />
        <Route exact path="/Settings" render={() => <Settings />} />
        <Route exact path="/SignIn" render={props => <SignIn {...props} />} />
        <Route exact path="/SignUp" render={props => <SignUp {...props} />} />
        <Route exact path="/Flights" render={() => <Flights />} />
      </div>
    );
  }
}

export default App;
