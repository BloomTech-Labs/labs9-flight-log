import React, { Component } from 'react';
import './App.css';
import Layout from './components/Header component/Layout';
import SignIn from './components/Pages/SignIn';
import Aircrafts from './components/Pages/Aircrafts';
import Billing from './components/Pages/Billing';
import Flights from './components/Pages/Flights';
import Instructors from './components/Pages/Instructors';
import Landing from './components/Pages/Landing';
import Settings from './components/Pages/Settings';
import SignUp from './components/Pages/SignUp';
import {Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Route
          exact
          path="/"
          render={() => <Landing />}
        />
        <Route
          exact
          path="/Aircrafts"
          render={() => <Aircrafts />}
        />
        <Route
          exact
          path="/Billing"
          render={() => <Billing />}
        />
        <Route
          exact
          path="/Instructors"
          render={() => <Instructors />}
        />
        <Route
          exact
          path="/Settings"
          render={() => <Settings />}
        />
        <Route
          exact
          path="/SignIn"
          render={() => <SignIn />}
        />
        <Route
          exact
          path="/SignUp"
          render={() => <SignUp />}
        />
         <Route
          exact
          path="/Flights"
          render={() => <Flights />}
        />
      </div>
    );
  }
}

export default App;
