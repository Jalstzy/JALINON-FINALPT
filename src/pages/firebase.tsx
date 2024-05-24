// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq4F_Lk5qxCeg-E8bZElpn5Fy8_ErDMXQ",
  authDomain: "fir-auth-fb9b7.firebaseapp.com",
  projectId: "fir-auth-fb9b7",
  storageBucket: "fir-auth-fb9b7.appspot.com",
  messagingSenderId: "291125770818",
  appId: "1:291125770818:web:8edec9cb7251195df60bdb",
  measurementId: "G-V1Z28B1Q31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

