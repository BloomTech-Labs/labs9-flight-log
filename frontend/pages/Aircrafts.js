import Layout from "../components/Layout";
import React, { Component } from "react";
import axios from "axios";
import AircraftC from "../components/aircrafts/AircraftC";
import AircraftE from "../components/aircrafts/AircraftE";
import AirplaneForm from '../components/aircrafts/AirplaneForm'
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
    this.state = {
      aircraftsList: []
    };
  }
  componentDidMount() {
    axios.get("https://labs9-flight-log.herokuapp.com/airplanes").then(response => {
      console.table(response.data);
      this.setState({ aircraftsList: response.data });
    });
  }
  render() {
    return (
      <Layout>
        <div>Hello from AircraftsList page</div>
        <h1>aircrafts list:</h1>
        <div>
          {this.state.aircraftsList.map(aircraft => (
            <h3>
              make: {aircraft.make}, model: {aircraft.model}, tail number:{" "}
              {aircraft.tailNumber}
            </h3>
          ))}
        </div>
        <AirplaneForm />
        {/* <AircraftC /> */}
        {/* <AircraftE /> */}
      </Layout>
    );
  }
}

export default AircraftsList;
