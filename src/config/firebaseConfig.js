import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAsH2xCnAkqkGD05NrlvwVA8zzX6gpzEUM",
  authDomain: "to-do-training.firebaseapp.com",
  databaseURL: "https://to-do-training.firebaseio.com",
  projectId: "to-do-training",
  storageBucket: "to-do-training.appspot.com",
  messagingSenderId: "843881750338",
  appId: "1:843881750338:web:94fb31bdee23b1599732db",
  measurementId: "G-2J0LEJN0CY",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
