import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV7I6g7Sb_b6mvg1WGambGg1vCwCuSfd0",
  authDomain: "pokemon-718a0.firebaseapp.com",
  projectId: "pokemon-718a0",
  storageBucket: "pokemon-718a0.appspot.com",
  messagingSenderId: "441819867561",
  appId: "1:441819867561:web:c9113f3bc9e61d21fcfcb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;