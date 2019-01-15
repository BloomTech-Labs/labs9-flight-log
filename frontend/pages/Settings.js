import Layout from "../components/Layout";
import React, { Component } from "react";
import axios from "axios";

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
  componentDidMount() {
    axios.get("http://localhost:9000/pilots").then(response => {
      console.table(response.data);
    });
  }
  render() {
    return (
      <Layout>
        <p>Hello from settings Next.js!!!!!!!</p>
      </Layout>
    );
  }
}

export default Settings;
