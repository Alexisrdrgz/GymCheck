import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCniiZ7mqVM7qO8VxU86JQ7DYlnaJnV10A",
  authDomain: "gymcheck-c47e8.firebaseapp.com",
  projectId: "gymcheck-c47e8",
  storageBucket: "gymcheck-c47e8.appspot.com",
  messagingSenderId: "106234338308",
  appId: "1:106234338308:web:50b0bbdc4717e93ab8a951",
  measurementId: "G-GDFPLE5SJ5",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const db: Firestore = getFirestore(app);
const storage = getStorage(app);
const auth: Auth = getAuth(app);

export {
  db,
  collection,
  doc,
  addDoc,
  setDoc,
  analytics,
  getDocs,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  query,
  where,
  deleteDoc,
  browserSessionPersistence,
  setPersistence,
  onSnapshot,
};
