import React from "react";
// import { Divider } from "@material-ui/core";
// import fire from "../Config/fire";
// import firebase from "firebase";
// import axios from "axios";

class HOC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tailNumber: props.tailNumber
    };
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div>Hello:{this.props.aircraft.tailNumber}</div>
      </div>
    );
  }
}

// class HOC extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       token: ""
//     };
//   }

//   componentDidMount() {
//     // console.log("this1", this);
//     // fire
//     //   .auth()
//     //   .currentUser.getIdToken(/* forceRefresh */ true)
//     //   .then(function(idToken) {
//     //     console.log("idToken", idToken);
//     //     const body = { token: idToken };
//     //     axios
//     //       .post("http://localhost:9000/pilots/signin", body)
//     //       .then(response => {
//     //         console.log("response.data", response.data);
//     // this.setState({ token: token });
//     //   });
//     //   })
//     //   .then(console.log("after"), this.props.updateUID(this.state.token));
//     // console.log("rightbefore");
//     // console.log("rightbefore");
//     //  this.props.updateUID(this.state.token);
//   }
//   render() {
//     return <div />;
//   }
// }

export default HOC;
