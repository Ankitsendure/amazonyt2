// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoMEq8YV4O5wpRFQ5n234nRvduWiPEoJs",
  authDomain: "c-e8d61.firebaseapp.com",
  projectId: "c-e8d61",
  storageBucket: "c-e8d61.appspot.com",
  messagingSenderId: "530000704606",
  appId: "1:530000704606:web:e15712f854d8a718ee70cf",
  measurementId: "G-HRK7ZHJ1P6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export default firebaseConfig