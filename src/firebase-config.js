import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLCi67Lvg-i2HRXgT60QMlmrZV7I0IH9o",
  authDomain: "workout-log-7c88b.firebaseapp.com",
  projectId: "workout-log-7c88b",
  storageBucket: "workout-log-7c88b.appspot.com",
  messagingSenderId: "28582592483",
  appId: "1:28582592483:web:3061e70774b7582f95aad6",
  measurementId: "G-2ZGCT4YKPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
