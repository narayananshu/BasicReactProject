import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo3Iy3saD4Kml7xG96B9cvc0gTVm0v2VA",
  authDomain: "reactpracticefirebase-5be3b.firebaseapp.com",
  projectId: "reactpracticefirebase-5be3b",
  storageBucket: "reactpracticefirebase-5be3b.appspot.com",
  messagingSenderId: "121289753878",
  appId: "1:121289753878:web:07db716b6f327b4acb7c37",
  measurementId: "G-8575P1GZJ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
// const analytics = getAnalytics(app);