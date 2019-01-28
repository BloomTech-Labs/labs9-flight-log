import Layout from "../components/Layout";
import React, { Component } from "react";
// import axios from "axios";
import fire from "../components/config/fire";

// const Settings = () => (
//   <Layout>
//     <div>
//       <p>Hello from settings Next.js</p>
//     </div>
//   </Layout>
// );

// import pilots(users), this component will open settings to changes user's name
// billing info etc, probably wont need a get all but only get by id, update, delete
//set state, to username, password, paid/unpaid,

class Settings extends Component {
  constructor() {
    super();
    this.state = {};
  }
  signOut = () => {
    fire
      .auth()
      .signOut()
      .then(result => {
        console.log(result, "success");
      })
      .catch(error => console.log(error, "failure"));
  };
  componentDidMount() {
    console.log("mounted");
    // let data = {
    //   firstName: "something"
    // }
    // axios.get("http://localhost:9000/pilots").then(response => {
    //   console.log(response)
    // })
    // fire
    //   .auth()
    //   .currentUser.getIdToken(/* forceRefresh */ true)
    //   .then(function (idToken) {
    //     let headers = { "token": idToken };
    const data = {
      firstName: "axiosTest",
      lastName: "axios"
    };

    //     // console.log({ headers: headers }, "headers");
    axios.post("http://localhost:9000/pilots", data).then(response => {
      console.log("posted", response.data);
    });
    //     console.log("headers token", { headers: headers });
    //   })
    //   .catch(function (error) {
    //     // Handle error
    //     console.log(error);
    //   });
  }
  render() {
    return (
      <Layout>
        <p>Hello from settings Next.js!!!!!!!</p>
        <button onClick={this.signOut}>signOut</button>
      </Layout>
    );
  }
}

export default Settings;
