import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyE6UbwF1HYqcLb7vV2p2CnBBVgaWBMlA",
  authDomain: "afqalmrft-e1913.firebaseapp.com",
  projectId: "afqalmrft-e1913",
  storageBucket: "afqalmrft-e1913.firebasestorage.app",
  messagingSenderId: "871199543253",
  appId: "1:871199543253:web:387907520495191e92f75c",
  measurementId: "G-8EQD69ZCKY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
