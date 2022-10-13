import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2kaDNb3RLhg3VXr8HudSxS7QIK-O6KpA",
  authDomain: "yantasstore.firebaseapp.com",
  projectId: "yantasstore",
  storageBucket: "yantasstore.appspot.com",
  messagingSenderId: "330360808677",
  appId: "1:330360808677:web:ff5343cda5ef2fa44be00c"
};


const app = initializeApp(firebaseConfig);

export default function getFireBase () { 
  return app
}