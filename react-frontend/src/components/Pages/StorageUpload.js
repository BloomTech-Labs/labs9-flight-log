import React, { Component } from "react";
import fire from "../components/config/fire";
const storage = fire.storage();

class StorageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      // const image = e.target.files[0];
      // this.setState({image})
      this.setState({ image: e.target.files[0] });
    }
  };

  handleUpload = () => {
    // console.log("fired");
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // uploadTask.on('state_changed', progress, error, complete)
    uploadTask.on(
      "state_changed",
      snapshot => {
        //progress...
        // console.log(snapshot);
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        //error...
        console.log(error);
      },
      () => {
        //complete...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    // const storage = fire.storage();
    // const storageRef = storage.ref();
    // const imagesRef = storageRef.child("images/airplane.jpg");
    // console.log("storage", storage);
    // console.log("storageref", storageRef);
    // console.log("imagesRef", imagesRef);
    // const filename = "this is filename";
    // storageRef.put(filename).then(function(snapshot) {
    //   console.log("uploaded");
    // });
    const style = {
      height: "100vh",
      display: "flex",
      flexDirection: " column",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div style={style}>
        <progress value={this.state.progress} max="100" />
        <br />
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>upload button</button>
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/150"}
          alt="uploaded images"
          height="500"
          width="500"
        />
      </div>
    );
  }
}

export default StorageUpload;
