// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgJJBfoIWxSWbT78WwUGKDmwFVivpcp1U",
  authDomain: "netflix-gpt-68fdf.firebaseapp.com",
  projectId: "netflix-gpt-68fdf",
  storageBucket: "netflix-gpt-68fdf.firebasestorage.app",
  messagingSenderId: "1041155020704",
  appId: "1:1041155020704:web:ccde81130bc214428776c5",
  measurementId: "G-Z5V48G5Z88",
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
