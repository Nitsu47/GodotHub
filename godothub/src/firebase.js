import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

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

export const db = getFirestore(app);
export const storage = getStorage(app);
