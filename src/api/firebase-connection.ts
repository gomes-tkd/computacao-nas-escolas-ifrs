import {firebaseDotEnv} from "@/functions/dotenv";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseDotEnv.apiKey,
    authDomain: firebaseDotEnv.authDomain,
    projectId: firebaseDotEnv.projectId,
    storageBucket: firebaseDotEnv.storageBucket,
    messagingSenderId: firebaseDotEnv.messagingSenderId,
    appId: firebaseDotEnv.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
