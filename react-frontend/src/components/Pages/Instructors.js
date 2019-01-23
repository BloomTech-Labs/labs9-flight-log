import Layout from "../Header component/Layout";
import React, { Component } from "react";
import axios from "axios";
// import InstructorC from "../components/instructors/InstructorC";
// import InstructorE from "../components/instructors/InstructorE";

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
    this.state = {
      instructorsList: []
    };
  }
  componentDidMount() {
    axios.get("https://labs9-flight-log.herokuapp.com/instructors").then(response => {
      console.table(response.data);
      this.setState({ instructorsList: response.data });
    });
  }
  render() {
    return (
      <Layout>
        <div>Hello from InstructorsList page</div>
        <h1>instructors list:</h1>
        <div>
          {this.state.instructorsList.map(instructor => (
            <h3>
              name: {instructor.name}, licNo: {instructor.licenseNum}, contact:{" "}
              {instructor.contactInfo}, notes: {instructor.notes}, ratings:{" "}
              {instructor.ratings}
            </h3>
          ))}
        </div>
        {/* <InstructorC /> */}
        {/* <InstructorE /> */}
      </Layout>
    );
  }
}

export default InstructorsList;
