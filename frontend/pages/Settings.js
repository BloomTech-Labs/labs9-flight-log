import Layout from "../components/Layout";
import React, { Component } from "react";
import axios from "axios";
import fire from '../components/config/fire'

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
  signOut= ()=>{
    fire.auth().signOut().then((result)=>{
      console.log(result, 'success')
    }).catch(error=> console.log(error,'failure'))
  }
  componentDidMount(){
    console.log('mounted')
    fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      console.log(idToken,'idToken')
      let headers={"token":idToken}
      let data= {
        "firstName":"axiosTest",
        "lastName":"axios"
      }
      axios.post("https://labs9-flight-log.herokuapp.com/pilots", {headers:headers})
      console.log(idToken)
    }).catch(function(error) {
      // Handle error
      console.log(error)
    });
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
