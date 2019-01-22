import firebase from "firebase";
try {
  firebase.initializeApp({
    apiKey: "AIzaSyCP-EjmMT_X7izYqnqN2UgGqJFpb-wOoKM",
    authDomain: "lab9-flightlogs.firebaseapp.com",
    databaseURL: "https://lab9-flightlogs.firebaseio.com",
    projectId: "lab9-flightlogs",
    storageBucket: "lab9-flightlogs.appspot.com",
    messagingSenderId: "491408929287"
  });
} catch (err) {
  // we skip the “already exists” message which is

  // not an actual error when we’re hot-reloading

  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error raised", err.stack);
  }
}
const fire = firebase;
export default fire;

// import firebase from "firebase/app";
// import "firebase/storage";
// const config = {
//   apiKey: "AIzaSyCP-EjmMT_X7izYqnqN2UgGqJFpb-wOoKM",
//   authDomain: "lab9-flightlogs.firebaseapp.com",
//   databaseURL: "https://lab9-flightlogs.firebaseio.com",
//   projectId: "lab9-flightlogs",
//   storageBucket: "lab9-flightlogs.appspot.com",
//   messagingSenderId: "491408929287"
// };
// firebase.initializeApp(config);
// const storage = firebase.storage();
// export { storage, firebase as default };
