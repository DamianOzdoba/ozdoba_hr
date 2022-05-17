import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOjXDQTyhhR83qWs1IhY3LZoRn_lQpxWc",
    authDomain: "ozdoba-hr.firebaseapp.com",
    projectId: "ozdoba-hr",
    storageBucket: "ozdoba-hr.appspot.com",
    messagingSenderId: "631627055275",
    appId: "1:631627055275:web:630bae8b034011f97ef7ee",
    measurementId: "G-NTK43LJ1HN"
};

firebase.initializeApp(firebaseConfig);

export default firebase;