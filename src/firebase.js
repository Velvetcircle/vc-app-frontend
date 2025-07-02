// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi8RPqGQHWflRCvCuuxa4oFeEpzcbG9YM",
  authDomain: "the-velvet-circle.firebaseapp.com",
  projectId: "the-velvet-circle",
  storageBucket: "the-velvet-circle.appspot.com",
  messagingSenderId: "your_sender_id",  // optional for now
  appId: "your_app_id" // optional for now
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
