import Layout from "../components/Layout";
import React, { Component } from "react";
import axios from "axios";

// const AircraftList = () => (
//   <Layout>
//     <div>
//       <p>Hello from aircraftList Next.js</p>
//     </div>
//   </Layout>
// );

//import aircrafts, this component will allow user to preform crud operations on aircrafts
// get all aircrafts referenced to user by id/name, create, update, delete
class AircraftsList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios.get("http://localhost:9000/aircrafts").then(response => {
      console.table(response.data);
    });
  }
  render() {
    return (
      <Layout>
        <div>Hello from AircraftsList page</div>
      </Layout>
    );
  }
}

export default AircraftsList;
