import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBee1MEe7FpOh3gHPgxGBiim2DoaAfqM0s",
    authDomain: "a-c8d18.firebaseapp.com",
    projectId: "a-c8d18",
    storageBucket: "a-c8d18.appspot.com",
    messagingSenderId: "633695907191",
    appId: "1:633695907191:web:10cb2426cbece2b0fcc572"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };