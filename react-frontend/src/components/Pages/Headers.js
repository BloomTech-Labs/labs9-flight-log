import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import SignInUi from "./SignInUi";
class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    // const { classes, headerIsHidden, ...other } = this.props;

    return (
      <div>
        <Route exact path="/" render={props => <Landing {...props} />} />
        <Route
          exact
          path="/SignIn"
          render={() => <SignInUi updateState={this.props.updateState} />}
        />
      </div>
    );
  }

}
export default Headers;
