// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmjcLOLhejjuyBT5V5r3FlXK1JMvD412c",
  authDomain: "defeat-task.firebaseapp.com",
  projectId: "defeat-task",
  storageBucket: "defeat-task.firebasestorage.app",
  messagingSenderId: "205613498218",
  appId: "1:205613498218:web:640ec9b8ee475a2be06f13"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
