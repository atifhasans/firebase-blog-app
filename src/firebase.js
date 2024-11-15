import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYdqKwkjvLnEDwFyYk93OhDdQOFihIh5g",
  authDomain: "blogging-app-9830b.firebaseapp.com",
  projectId: "blogging-app-9830b",
  storageBucket: "blogging-app-9830b.firebasestorage.app",
  messagingSenderId: "827951125313",
  appId: "1:827951125313:web:23c0f5c53f5a2e955747c0",
  measurementId: "G-RDZTYDF7ED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
