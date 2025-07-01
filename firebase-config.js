// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmSKF1LkuQLehvht-T_w9wkfujHwFi2H0",
  authDomain: "electronic-43c0b.firebaseapp.com",
  projectId: "electronic-43c0b",
  storageBucket: "electronic-43c0b.appspot.com",
  messagingSenderId: "928013217742",
  appId: "1:928013217742:web:f3252242287c9034db059f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

