// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC2Yk4CQ64SpOjXWRs7qZ3x1SQ9AHjzBZA",
    authDomain: "fazenda-2d8e9.firebaseapp.com",
    projectId: "fazenda-2d8e9",
    storageBucket: "fazenda-2d8e9.appspot.com",
    messagingSenderId: "1051482644090",
    appId: "1:1051482644090:web:153d20c4a7caf16e5965c3"
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app)
export { db }