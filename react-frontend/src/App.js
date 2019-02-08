import React, { Component } from "react";
// import "./App.css";
// import Layout from './components/Header component/Layout';

import Airplanes from "./components/Pages/Airplanes";
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
      Name: "",
      id: "",
      refresh: false
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
      .then(function(idToken) {
        // console.log("App.js componentWillMount");
        const body = { token: idToken };
        //http://localhost:9000
        //https://labs9-flight-log.herokuapp.com
        axios.post("https://labs9-flight-log.herokuapp.com/pilots", body);
        that.setState({ idToken: idToken });
      })
      .catch(error => {
        console.log(error)
      });
  }

  componentDidMount() {
    const that = this;
    fire
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        const body = idToken;
        //console.log("idToken", idToken);
        axios
          //http://localhost:9000
          //https://labs9-flight-log.herokuapp.com

          .get("https://labs9-flight-log.herokuapp.com/pilots/signin", {
            params: { token: body }
          })
          .then(response => {
            //console.log("response.data", response.data);
            const uid = response.data.PilotUID;
            const name = response.data.PilotName;

            const id = response.data.PilotID;
            //console.log(name, uid);
            that.setState({
              UID: uid,
              Name: name,
              id: id,
              refresh: !that.state.refresh
            });
          });
      })
      .catch(error => {
        console.log(error)
      });
  }
  // refresh = () => {
  //   console.log("fired from app");
  //   this.componentDidMount();
  // };

  render() {
    //console.log("this.state.refresh", this.state.refresh);
    //console.log("this.state.id inside app", this.state.id);
    if (this.state.refresh) {
      // const { classes, headerIsHidden, ...other } = this.props;

      return (
        <div className="App">
          <Route
            exact
            path="/Airplanes"
            render={props => <Airplanes {...props} UID={this.state.UID} />}
          />

          <Route
            exact
            path="/Billing"
            render={props => (
              <Billing {...props} UID={this.state.UID} id={this.state.id} />
            )}
          />

          <Route
            exact
            path="/Instructors"
            render={props => <Instructors {...props} UID={this.state.UID} />}
          />
          <Route
            exact
            path="/Settings"
            render={props => <Settings {...props} UID={this.state.UID} />}
          />
          <Route
            exact
            path="/"
            render={props => <Flights {...props} UID={this.state.UID} />}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <Flights {...props} UID={this.state.UID} />}
        />
      </div>
    );
  }
}

export default App;
