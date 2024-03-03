

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth }  from "firebase/auth";
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, remove, set } from "firebase/database";
import { getStorage } from "firebase/storage";
import 'firebase/compat/firestore';

const firebaseConfig = {
  // apiKey: "AIzaSyBs5xY58LqMt8j3dTDYhro7reNIbeD_Rdw",
  // authDomain: "user-fyp-5987b.firebaseapp.com",
  // projectId: "user-fyp-5987b",
  // storageBucket: "user-fyp-5987b.appspot.com",
  // messagingSenderId: "820823722560",
  // appId: "1:820823722560:web:ede50a6beb83aef84c2da5"


  // apiKey: "AIzaSyDrAzuzBn7smq9wmY5LHiJ4GOFiQM99owQ",
  // authDomain: "fyp-user-user.firebaseapp.com",
  // projectId: "fyp-user-user",
  // storageBucket: "fyp-user-user.appspot.com",
  // messagingSenderId: "708508861343",
  // appId: "1:708508861343:web:3a3ee7951d24ef653433aa"

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


// const app = initializeApp(firebaseConfig);
const app = firebase. initializeApp(firebaseConfig);
export const db = app.firestore();
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app);
export const storage = getStorage(app);

// Define the 'off' function
export const off = (ref, callback) => {
  // Implement your logic for unsubscribing from realtime updates here
};

// Export database functions
export { ref, onValue, set, remove };



// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue, remove, set } from "firebase/database";
// import { getStorage } from "firebase/storage";
// // import firebase from "E:/4 year/FYP_SLTC/Codes/Dashboard/fyp-Dashborad-fainall/src/firebase.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyC2NQe9YIiKk8qipxrCxPlZkfNfogBePKI",
//   authDomain: "car-parking-f9338.firebaseapp.com",
//   databaseURL:
//     "https://car-parking-f9338-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "car-parking-f9338",
//   storageBucket: "car-parking-f9338.appspot.com",
//   messagingSenderId: "357367526616",
//   appId: "1:357367526616:web:461c0dca8edf47f36053ad",
//   measurementId: "G-48XWCTC9Z1",
// };
// // Initialize Firebase app
// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Get a reference to the Firebase Realtime Database service
// export const db = getDatabase();

// // Get a reference to the Firebase Storage service
// export const storage = getStorage(app);

// // Define the 'off' function
// export const off = (ref, callback) => {
//   // Implement your logic for unsubscribing from realtime updates here
// };

// // Export database functions
// export { ref, onValue, set, remove };
