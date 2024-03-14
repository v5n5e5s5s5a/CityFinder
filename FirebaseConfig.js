// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9QsLriuscVlstoFY_6RrtLdh5KZUFfCs",
  authDomain: "cityfinder-aadb6.firebaseapp.com",
  projectId: "cityfinder-aadb6",
  storageBucket: "cityfinder-aadb6.appspot.com",
  messagingSenderId: "876915774743",
  appId: "1:876915774743:web:aca9066fed0555b6bfd352"
};

// Initialize Firebase
 export const firebaseaApp  = initializeApp(firebaseConfig);
 export const firebaseaAuth  = getAuth(firebaseaApp);

