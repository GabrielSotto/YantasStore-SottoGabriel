// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2kaDNb3RLhg3VXr8HudSxS7QIK-O6KpA",
  authDomain: "yantasstore.firebaseapp.com",
  projectId: "yantasstore",
  storageBucket: "yantasstore.appspot.com",
  messagingSenderId: "330360808677",
  appId: "1:330360808677:web:ff5343cda5ef2fa44be00c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
 export const db = getFirestore(app);