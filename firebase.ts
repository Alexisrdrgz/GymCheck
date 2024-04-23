// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  initializeAuth,
  deleteUser,
  getReactNativePersistence,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqj5hIimXAKCjU_WAmFoWtWvFDWGxXS5w",
  authDomain: "gymcheck-59522.firebaseapp.com",
  projectId: "gymcheck-59522",
  storageBucket: "gymcheck-59522.appspot.com",
  messagingSenderId: "57760860650",
  appId: "1:57760860650:web:c042bb527b37d330f84a93",
  measurementId: "G-Y0Y4MKBDW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "client");
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {
  auth,
  analytics,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  deleteUser,
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  db,
  onSnapshot,
  getDoc,
};
