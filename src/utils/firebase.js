// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "quickstart-1586334548131.firebaseapp.com",
    projectId: "quickstart-1586334548131",
    storageBucket: "quickstart-1586334548131.appspot.com",
    messagingSenderId: "732200101013",
    appId: "1:732200101013:web:9cc18151f468f97a06a79c",
    measurementId: "G-0F9KC5VXM6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
