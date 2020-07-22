import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();
export const auth = firebase.auth();
