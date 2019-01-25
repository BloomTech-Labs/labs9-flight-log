import React, { Component } from "react";
import "./App.css";
// import Layout from './components/Header component/Layout';
import SignIn from "./components/Pages/SignIn";
import Aircrafts from "./components/Pages/Aircrafts";
import Billing from "./components/Pages/Billing";
import Flights from "./components/Pages/Flights";
import Instructors from "./components/Pages/Instructors";
import Landing from "./components/Pages/Landing";
import Settings from "./components/Pages/Settings";
import SignUp from "./components/Pages/SignUp";
import fire from "./components/Config/fire";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

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
  componentDidMount() {
    const that = this;
    fire
      .auth()
      .currentUser.getIdToken()
      .then(function(idToken) {
        const body = idToken;
        console.log(body)
        axios
          .post("https://labs9-flight-log.herokuapp.com/pilots",body)
          .then(response => {
            console.log(response);
          });
        that.setState({ UID: idToken });
      });
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/Aircrafts" render={() => <Aircrafts />} />
        <Route exact path="/Billing" render={() => <Billing />} />
        <Route
          exact
          path="/Instructors"
          render={props => <Instructors {...props} />}
        />
        <Route exact path="/Settings" render={() => <Settings />} />
        {/* <Route exact path="/SignIn" render={props => <SignIn {...props} />} />
        <Route exact path="/SignUp" render={props => <SignUp {...props} />} /> */}
        <Route exact path="/Flights" render={() => <Flights />} />
      </div>
    );
  }
}

export default App;
