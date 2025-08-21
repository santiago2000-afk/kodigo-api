import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence 
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_6xQmdx3iQeZSvtd1B1aWqNIsVxMvlFY",
  authDomain: "kodigo-pi.firebaseapp.com",
  projectId: "kodigo-pi",
  storageBucket: "kodigo-pi.firebasestorage.app",
  messagingSenderId: "379519648638",
  appId: "1:379519648638:web:2a8fffdbaa68b08d8fa92f",
  measurementId: "G-F07FD1SJQ9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa servicios
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Persistencia de sesión (mantiene logueado aunque recargue)
setPersistence(auth, browserLocalPersistence);
