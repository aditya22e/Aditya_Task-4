import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "MY_API_KEY",
    authDomain: "MY_AUTH_DOMAIN",
    projectId: "MY_P_ID",
    storageBucket: "MY_BUCKET",
    messagingSenderId: "MY_S_ID",
    appId: "MY_A_ID",
    measurementId: "MY_M_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
