import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Flights = props => (
  <Layout>
    <h1>Flights</h1>
    <div>
      {props.flights.map(flight => (
        <div>
          Flight Date: {flight.flightDate}, Flight Name:{flight.flightName},
          Airport Routes: {flight.airports}, Remarks: {flight.remarks}, Number
          of Takeoffs: {flight.numOfTakeOffs}, Number of Landings:{" "}
          {flight.numOfLandings}, Single Engine Land: {flight.SEL}, Multi Engine
          Land{flight.MEL}, Day Hours: {flight.dayHours}, Night Hours:{" "}
          {flight.nightHours}, Actual Instruments: {flight.actInstruments},
          Simulated Instruments: {flight.simInstruments}, Ground Trainer:{" "}
          {flight.groundTrainer}, Cross Country: {flight.crossCountry}, As
          Instructor: {flight.asInstructor}, Dual: {flight.dualReceived}, Pilot
          in command: {flight.pilotInCommand}, Total hours: {flight.total}
        </div>
      ))}
    </div>
  </Layout>
);

Flights.getInitialProps = async function() {
  const res = await fetch("https://labs9-flight-log.herokuapp.com/flights");
  const data = await res.json();

  return {
    flights: data
  };
};

export default Flights;
