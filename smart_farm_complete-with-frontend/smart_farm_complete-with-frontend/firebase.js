// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrQIxkEzUhyih-HdQHdBf-dFNuXzwUuFA",
  authDomain: "smartfarm-bc822.firebaseapp.com",
  projectId: "smartfarm-bc822",
  storageBucket: "smartfarm-bc822.appspot.com",
  messagingSenderId: "676529299727",
  appId: "1:676529299727:web:c074d563eef59d8da2de7a"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export {firebase, db}