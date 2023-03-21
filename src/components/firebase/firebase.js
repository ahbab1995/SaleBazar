// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCp5wwdNO7vE_tgksrD_fGi84oV9c3-wY",
  authDomain: "salebazaar-7dea1.firebaseapp.com",
  projectId: "salebazaar-7dea1",
  storageBucket: "salebazaar-7dea1.appspot.com",
  messagingSenderId: "663057291316",
  appId: "1:663057291316:web:6d79349ba2e06c75cf9261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;