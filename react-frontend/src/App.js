import React, { Component } from 'react';
import './App.css';
// import Layout from './components/Header component/Layout';
import SignIn from './components/Pages/SignIn';
import Aircrafts from './components/Pages/Aircrafts';
import Billing from './components/Pages/Billing';
import Flights from './components/Pages/Flights';
import Instructors from './components/Pages/Instructors';
import Landing from './components/Pages/Landing';
import Settings from './components/Pages/Settings';
import SignUp from './components/Pages/SignUp';
import HOC from "./components/Pages/HOC";
import { BrowserRouter as Route } from "react-router-dom";

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
        <Route exact path="/Aircrafts" render={() => <Aircrafts />} />
        <Route exact path="/Billing" render={() => <Billing />} />
        <Route exact path="/Instructors" render={() => <Instructors />} />
        <Route exact path="/Settings" render={() => <Settings />} />
        <Route exact path="/SignIn" render={props => <SignIn {...props} />} />
        <Route exact path="/SignUp" render={props => <SignUp {...props} />} />
        <Route exact path="/Flights" render={() => <Flights />} />
        <Route
          exact
          path="/HOC"
          render={() => <HOC updateUID={this.updateUID} />}
        />
      </div>
    );
  }
}

export default App;
