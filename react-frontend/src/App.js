import React, { Component } from "react";
import "./App.css";
// import Layout from './components/Header component/Layout';

import Aircrafts from "./components/Pages/Airplanes";
import Billing from "./components/Pages/Billing";
import Flights from "./components/Pages/Flights";
import Instructors from "./components/Pages/Instructors";
import Settings from "./components/Pages/Settings";
import fire from "./components/Config/fire";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idToken: "",
      UID: "",
      Name: ""
    };
  }

  updateUID = UID => {
    this.setState({
      UID: UID
    });
  };
  componentWillMount() {
    const that = this;
    fire
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        console.log(idToken);
        const body = { token: idToken };
        axios.post("https://labs9-flight-log.herokuapp.com/pilots", body);
        that.setState({ idToken: idToken })
      });

  }
  componentDidMount(){
    const that= this;
    fire
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      const body = idToken;
      console.log("idToken", idToken);
      axios
        .get("https://labs9-flight-log.herokuapp.com/pilots/signin", {
          params: { token: body }
        })
        .then(response => {
          console.log("response.data", response.data);
          const uid = response.data.PilotUID;
          const name = response.data.PilotName;
          console.log(name, uid)
          that.setState({
            UID:uid,
            Name:name
          })
        });
    });
  }
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/Airplanes"
          render={props => <Aircrafts {...props} UID={this.state.UID} />}
        />
        <Route exact path="/Billing" render={(props) => <Billing {...props}UID={this.state.UID}/>} />
        <Route
          exact
          path="/Instructors"
          render={props => <Instructors {...props}UID={this.state.UID} />}
        />
        <Route exact path="/Settings" render={(props) => <Settings {...props}UID={this.state.UID} />} />
        <Route exact path="/Flights" render={(props) => <Flights {...props}UID={this.state.UID}/>} />
      </div>
    );
  }
}

export default App;
