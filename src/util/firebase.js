// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ8tq4SlRj__qka6YWuxuJ_dgJDyWMhQM",
  authDomain: "unifylk.firebaseapp.com",
  projectId: "unifylk",
  storageBucket: "unifylk.appspot.com",
  messagingSenderId: "229829563122",
  appId: "1:229829563122:web:7525b5a6c8be9c8045766b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);