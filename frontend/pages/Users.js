import React from "react";
import axios from "axios";
// import { Divider } from "@material-ui/core";

export default class Users extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:9000/pilots").then(response => {
      console.log(response.data);
    });
  }
  render() {
    return <div>something</div>;
  }
}
