// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAe6ihk4E_SHuuPtoEnVebnuS9JdFw-FWU",
  authDomain: "afaq-almarefa.firebaseapp.com",
  projectId: "afaq-almarefa",
  storageBucket: "afaq-almarefa.firebasestorage.app",
  messagingSenderId: "851811909716",
  appId: "1:851811909716:web:26ac06a353161066d6edc1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
