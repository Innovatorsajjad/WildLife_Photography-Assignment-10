// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUXvbWHVaaeiT7fsny4x1y1JOcTKrceQQ",
  authDomain: "wildlife-photography-5c381.firebaseapp.com",
  projectId: "wildlife-photography-5c381",
  storageBucket: "wildlife-photography-5c381.appspot.com",
  messagingSenderId: "498044165663",
  appId: "1:498044165663:web:9e253a8866169e0e4eff2a",
  measurementId: "G-35DEJQ38T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
