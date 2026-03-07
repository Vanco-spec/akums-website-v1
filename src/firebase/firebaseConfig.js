// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase configuration from the console
const firebaseConfig = {
  apiKey: "AIzaSyA-cnL1-F0q6KHvLc0__vjkjja3e310HvQ",
  authDomain: "akums-website-v1.firebaseapp.com",
  projectId: "akums-website-v1",
  storageBucket: "akums-website-v1.firebasestorage.app",
  messagingSenderId: "104538446185",
  appId: "1:104538446185:web:e199ba543d38d206d385f8",
  measurementId: "G-BXFG4PZR8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
