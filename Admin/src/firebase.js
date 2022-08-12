// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpPf_lQtsk6Wa8urXvtfgMELoTyAmkugk",
  authDomain: "anime-ecommerce-store.firebaseapp.com",
  projectId: "anime-ecommerce-store",
  storageBucket: "anime-ecommerce-store.appspot.com",
  messagingSenderId: "730178379834",
  appId: "1:730178379834:web:5764ed07c73116115fd503",
  measurementId: "G-E2VJR99H25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app