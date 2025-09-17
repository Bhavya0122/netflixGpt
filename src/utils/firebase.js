// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPwyqaf6z0_F-9EzD2aiCkdHpQzMfaHFE",
  authDomain: "netflixgpt-8909d.firebaseapp.com",
  projectId: "netflixgpt-8909d",
  storageBucket: "netflixgpt-8909d.firebasestorage.app",
  messagingSenderId: "876044239669",
  appId: "1:876044239669:web:96e51f81a83e0382c8027c",
  measurementId: "G-H74TYZMJSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();