import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLVAGlFNouL3J8ve4Q7B3ujfW8p-vrdiQ",
    authDomain: "algo-auction.firebaseapp.com",
    projectId: "algo-auction",
    storageBucket: "algo-auction.firebasestorage.app",
    messagingSenderId: "1023478158707",
    appId: "1:1023478158707:web:176b426dfecae3711d6106",
    measurementId: "G-Y94N2WYY1K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
