import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCKa_AMsaSthnCQn-e8Lfumjk16CHqILb8",
  authDomain: "ashop-19387.firebaseapp.com",
  projectId: "ashop-19387",
  storageBucket: "ashop-19387.appspot.com",
  messagingSenderId: "66777107735",
  appId: "1:66777107735:web:d835d0a740257481c9fb52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
