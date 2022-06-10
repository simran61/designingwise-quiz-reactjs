// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz7EFHEgI9yb_qLK_3xNHaFRvJ6Vdarus",
  authDomain: "reactquiz-88e1a.firebaseapp.com",
  projectId: "reactquiz-88e1a",
  storageBucket: "reactquiz-88e1a.appspot.com",
  messagingSenderId: "578459752340",
  appId: "1:578459752340:web:74e18204c0e7aaa76f2181",
  measurementId: "G-4CEKQER75B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
