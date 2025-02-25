// src/firebase/firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpqwoMai_ME-80rhp0qZ1inqLShbuj4YU",
  authDomain: "tienda-ee903.firebaseapp.com",
  projectId: "tienda-ee903",
  storageBucket: "tienda-ee903.firebasestorage.app",
  messagingSenderId: "209389722115",
  appId: "1:209389722115:web:e223f4aba00dc287e28c36"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(app);

export { db };
