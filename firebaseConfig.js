import { initializeApp } from "firebase/app";
// Optionally import the services that you want to use
 import {  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  initializeAuth,
  getReactNativePersistence, } from "firebase/auth";
  import {AsyncStorage} from "react-native-async-storage/async-storage";
  import { getFirestore } from "firebase/firestore";

// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqj5hIimXAKCjU_WAmFoWtWvFDWGxXS5w",
  authDomain: "gymcheck-59522.firebaseapp.com",
  projectId: "gymcheck-59522",
  storageBucket: "gymcheck-59522.appspot.com",
  messagingSenderId: "57760860650",
  appId: "1:57760860650:web:c042bb527b37d330f84a93",
  measurementId: "G-Y0Y4MKBDW2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getFirestore();

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase