import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBBdmHjgvXljKEbP_KAF_tEK1D0MF1jslc",
  authDomain: "petter-site.firebaseapp.com",
  databaseURL: "https://petter-site.firebaseio.com",
  projectId: "petter-site",
  storageBucket: "petter-site.appspot.com",
  messagingSenderId: "440116767549",
  appId: "1:440116767549:web:ef9fabb9ee58d8191cf354",
  measurementId: "G-SJ0G40R4F0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();
export const auth = firebase.auth();
