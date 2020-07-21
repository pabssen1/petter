import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

fetch("/__/firebase/init.json").then(async response => {
  firebase.initializeApp(await response.json());
});

// Initialize Firebase

firebase.analytics();

const firestore = firebase.firestore();
const auth = firebase.auth();

export { auth, firestore };
