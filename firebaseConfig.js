// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3_4WaVcuMhyaJMxHV7aeGT1m56hmIMoQ",
  authDomain: "my-expo-project-9368d.firebaseapp.com",
  projectId: "my-expo-project-9368d",
  storageBucket: "my-expo-project-9368d.firebasestorage.app",
  messagingSenderId: "799037779341",
  appId: "1:799037779341:web:718e77771fae772c1361c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);