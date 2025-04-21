import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBRy1mm3EsCN1TtrW-_oRbksOPkhVWdX4",
    authDomain: "ecell-task-b3c1f.firebaseapp.com",
    projectId: "ecell-task-b3c1f",
    storageBucket: "ecell-task-b3c1f.firebasestorage.app",
    messagingSenderId: "273891517957",
    appId: "1:273891517957:web:71122fdf812f367c10de6c",
    measurementId: "G-M81VP5F5V1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };