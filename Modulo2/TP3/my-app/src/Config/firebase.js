import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVjBnRA20Z8bsOR58nPCKwduwWESxMqKo",
  authDomain: "react-utn-2022.firebaseapp.com",
  projectId: "react-utn-2022",
  storageBucket: "react-utn-2022.appspot.com",
  messagingSenderId: "1008994957724",
  appId: "1:1008994957724:web:e337bcacf8b6d9c1013059"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth()
firebase.db = firebase.firestore()
export default firebase

