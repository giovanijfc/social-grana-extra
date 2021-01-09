import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAfUza9i_kTiyX0sW7bPN5PXv6_bcvK6bc",
  authDomain: "social-grana-extra.firebaseapp.com",
  projectId: "social-grana-extra",
  storageBucket: "social-grana-extra.appspot.com",
  messagingSenderId: "819172751632",
  appId: "1:819172751632:web:0cd1b7cec5f0a9c0a2cd95",
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.firestore();
export const firebaseAuth = firebase.auth();
