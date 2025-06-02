import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmVz9-RST-Qwqdu9DQ_3iOgr8VU0z2aFc",
  authDomain: "trainwise-a3b55.firebaseapp.com",
  projectId: "trainwise-a3b55",
  storageBucket: "trainwise-a3b55.firebasestorage.app",
  messagingSenderId: "73548001873",
  appId: "1:73548001873:web:e50f762c65f42dd97d3e70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
