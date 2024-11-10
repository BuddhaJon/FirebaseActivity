import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoARe6FaFUowdAbVYaqH-NiZT-X4N6UL0",
    authDomain: "subscriptions-6c4ad.firebaseapp.com",
    projectId: "subscriptions-6c4ad",
    storageBucket: "subscriptions-6c4ad.firebasestorage.app",
    messagingSenderId: "769490933280",
    appId: "1:769490933280:web:495328181d6a4acf21ce45"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
