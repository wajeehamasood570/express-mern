import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDT9BssTWs1UNMlbzl_PQ_srpTNrCuYp58",
  authDomain: "personallibrary-c6307.firebaseapp.com",
  projectId: "personallibrary-c6307",
  storageBucket: "personallibrary-c6307.appspot.com",
  messagingSenderId: "21178424027",
  appId: "1:21178424027:web:27e194c82986052dd60afe",
  measurementId: "G-WLGTEMKXEC"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.database(firebaseConfig);
export default firebase;
