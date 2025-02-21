// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXroRxh2FN5gWxEjo6dC94tSxAyP2iYzE",
  authDomain: "todo-projct.firebaseapp.com",
  projectId: "todo-projct",
  storageBucket: "todo-projct.firebasestorage.app",
  messagingSenderId: "424815031428",
  appId: "1:424815031428:web:7e54ae87356f1331b53ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app