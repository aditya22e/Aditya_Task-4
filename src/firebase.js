import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.MY_API_KEY,
    authDomain: process.env.MY_AUTH_DOMAIN,
    projectId: process.env.MY_P_ID,
    storageBucket: process.env.MY_BUCKET,
    messagingSenderId: process.env.MY_S_ID,
    appId: process.env.MY_A_ID,
    measurementId: process.env.MY_M_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
