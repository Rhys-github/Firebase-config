import firebase from 'firebase'
require("@firebase/firestore")
import "firebase/firestore"
var firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyA9wM68w44IaOqydaQqkjEfeoLEKGAzYyQ",
  authDomain: "complaint-forum-ba975.firebaseapp.com",
  projectId: "complaint-forum-ba975",
  storageBucket: "complaint-forum-ba975.appspot.com",
  messagingSenderId: "53693961478",
  appId: "1:53693961478:web:686cc4dd44da179bd0ba87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

