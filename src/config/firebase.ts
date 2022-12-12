import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXXvkq-izMBJHhpAnSXSAk-Qy5DjhFlN4",
  authDomain: "vantient-817f1.firebaseapp.com",
  databaseURL: "https://vantient-817f1-default-rtdb.firebaseio.com",
  projectId: "vantient-817f1",
  storageBucket: "vantient-817f1.appspot.com",
  messagingSenderId: "920065241168",
  appId: "1:920065241168:web:610a5e4a6e29932e066155",
  measurementId: "G-BB1BDVM8YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
