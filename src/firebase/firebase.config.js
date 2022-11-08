// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHWiQYBerrXSoHXu9LrqhVp9bJCw7J988",
    authDomain: "mm-photographer.firebaseapp.com",
    projectId: "mm-photographer",
    storageBucket: "mm-photographer.appspot.com",
    messagingSenderId: "22606288378",
    appId: "1:22606288378:web:b8a4219b61029a8b314043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;