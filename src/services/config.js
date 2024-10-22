
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_JERSEYKINGS_KEY,
authDomain: "jerseykings-d1bfa.firebaseapp.com",
projectId: "jerseykings-d1bfa",
storageBucket: "jerseykings-d1bfa.appspot.com",
messagingSenderId: "86447289597",
appId: "1:86447289597:web:4f5aa5a9ad56b10eb23a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)


