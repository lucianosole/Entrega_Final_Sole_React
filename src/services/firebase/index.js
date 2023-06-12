import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3Hy40aogG8GRIem7PFZuqWvovzz_SStQ",
  authDomain: "ecommerce-juche.firebaseapp.com",
  projectId: "ecommerce-juche",
  storageBucket: "ecommerce-juche.appspot.com",
  messagingSenderId: "434778852289",
  appId: "1:434778852289:web:8b72a4efebdf3d5711bd40",
  measurementId: "G-CBYK4Q05PP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
