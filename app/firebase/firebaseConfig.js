import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHaPdt_LgQiZ6yUxIiTwC39AafZsGgFEc",
  authDomain: "artreum-homes.firebaseapp.com",
  projectId: "artreum-homes",
  storageBucket: "artreum-homes.firebasestorage.app",
  messagingSenderId: "480923763285",
  appId: "1:480923763285:web:31bfbf1c261f94c949cadc",
  measurementId: "G-1XB3X18N4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
export { app, analytics };
