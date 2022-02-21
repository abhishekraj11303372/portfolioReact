// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx6TFgR2JrrUmSPTBGVDv70GvG-CQhT_Y",
  authDomain: "abhishek-portfolio-8f31a.firebaseapp.com",
  projectId: "abhishek-portfolio-8f31a",
  storageBucket: "abhishek-portfolio-8f31a.appspot.com",
  messagingSenderId: "23081698712",
  appId: "1:23081698712:web:9cacad5cd68ea613a057ed",
  measurementId: "G-TG852V1CFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);