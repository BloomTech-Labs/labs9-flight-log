// import Layout from "../components/Layout";
// const Settings = () => (
//   <Layout>
//     <div>
//       <p>Hello from settings Next.js</p>
//     </div>
//   </Layout>
// );

// export default Settings;

import Layout from "../components/Layout";
import React, { Component } from "react";
// import fetch from "isomorphic-unfetch";
import axios from "axios";

class Settings extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get("https://backend-ewlooblllb.now.sh/pilots").then(response => {
      console.log(response.data);
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
