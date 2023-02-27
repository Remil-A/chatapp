import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBRbqrE7NYF75MOs3kAIARqWm_jU7AcRSI",
  authDomain: "chat-576a6.firebaseapp.com",
  projectId: "chat-576a6",
  storageBucket: "chat-576a6.appspot.com",
  messagingSenderId: "613676646842",
  appId: "1:613676646842:web:fac9538030aa127c075d83",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage()
 export const db = getFirestore()
