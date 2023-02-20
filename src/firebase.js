import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYMDgxjQNjIKZ-YUnKxstvUamQ1GKl8So",
  authDomain: "chatapp-firebase-3785e.firebaseapp.com",
  projectId: "chatapp-firebase-3785e",
  storageBucket: "chatapp-firebase-3785e.appspot.com",
  messagingSenderId: "493814151016",
  appId: "1:493814151016:web:4d9697afde0b0e059148dd",
  measurementId: "G-6GB7CY60YB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()