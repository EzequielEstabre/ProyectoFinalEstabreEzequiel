// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgccuX8MBiIImIcIg97zBuuaGn4lqDDwU",
  authDomain: "ecommerce-40d93.firebaseapp.com",
  projectId: "ecommerce-40d93",
  storageBucket: "ecommerce-40d93.appspot.com",
  messagingSenderId: "76545207012",
  appId: "1:76545207012:web:33b03fe4777b821fb39af1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)