// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwN24cCytJkv-0VL2QZbTH075nDJI0vbM",
  authDomain: "fir-auth-practice-c5047.firebaseapp.com",
  projectId: "fir-auth-practice-c5047",
  storageBucket: "fir-auth-practice-c5047.appspot.com",
  messagingSenderId: "497928759106",
  appId: "1:497928759106:web:f60672e0619b85b21ecadb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;