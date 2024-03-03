import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, remove, set } from "firebase/database";
import { getStorage } from "firebase/storage";
// import firebase from "E:/4 year/FYP_SLTC/Codes/Dashboard/fyp-Dashborad-fainall/src/firebase.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2NQe9YIiKk8qipxrCxPlZkfNfogBePKI",
  authDomain: "car-parking-f9338.firebaseapp.com",
  databaseURL:
    "https://car-parking-f9338-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "car-parking-f9338",
  storageBucket: "car-parking-f9338.appspot.com",
  messagingSenderId: "357367526616",
  appId: "1:357367526616:web:461c0dca8edf47f36053ad",
  measurementId: "G-48XWCTC9Z1",
};
// Initialize Firebase app
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database service
export const db = getDatabase();

// Get a reference to the Firebase Storage service
export const storage = getStorage(app);

// Define the 'off' function
export const off = (ref, callback) => {
  // Implement your logic for unsubscribing from realtime updates here
};

// Export database functions
export { ref, onValue, set, remove };
