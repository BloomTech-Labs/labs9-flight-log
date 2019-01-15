import Layout from "../components/Layout";
import React, { Component } from "react";
import axios from "axios";

// const InstructorList = () => (
//   <Layout>
//     <div>
//       <p>Hello from instructorList Next.js</p>
//     </div>
//   </Layout>
// );

//import instructors, this component will allow users to perform crud operations on instructors
//get all instructors refernced by user id/name, create, update, delete
class InstructorsList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios.get("http://localhost:9000/instructors").then(response => {
      console.table(response.data);
    });
  }
  render() {
    return (
      <Layout>
        <div>Hello from InstructorsList page</div>
      </Layout>
    );
  }
}

export default InstructorsList;
