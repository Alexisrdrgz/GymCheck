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
  apiKey: "AIzaSyCniiZ7mqVM7qO8VxU86JQ7DYlnaJnV10A",
  authDomain: "gymcheck-c47e8.firebaseapp.com",
  projectId: "gymcheck-c47e8",
  storageBucket: "gymcheck-c47e8.appspot.com",
  messagingSenderId: "106234338308",
  appId: "1:106234338308:web:50b0bbdc4717e93ab8a951",
  measurementId: "G-GDFPLE5SJ5"
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
