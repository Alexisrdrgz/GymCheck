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
  apiKey: "AIzaSyCvNho2PmVDENY4Z3svAughVr526fmSg6I",
  authDomain: "gymcheck-dda6f.firebaseapp.com",
  projectId: "gymcheck-dda6f",
  storageBucket: "gymcheck-dda6f.appspot.com",
  messagingSenderId: "925337140569",
  appId: "1:925337140569:web:46022846929c164836e048",
  measurementId: "G-S591WHE4BC",
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
