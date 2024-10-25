// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABRl5aa7iUfn-U4Q0syg2BaxMA-UyFsR0",
  authDomain: "godot-hub.firebaseapp.com",
  projectId: "godot-hub",
  storageBucket: "godot-hub.appspot.com",
  messagingSenderId: "554240441104",
  appId: "1:554240441104:web:27be2f32eb465bbe644395",
  measurementId: "G-NJ0999TZJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);