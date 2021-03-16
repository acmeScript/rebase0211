import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './config/firebase-config';

const firebaseConfig = firebase.initializeApp({
    apiKey: config.APIKEY,
    authDomain: config.AUTHDOMAIN,
    databaseURL: config.DATABASEURL,
    projectId: config.PROJECTID,
    storageBucket: config.STORAGEBUCKET,
    messagingSenderId: config.MESSAGINGSENDERID,
    appId: config.APPID
})

export { firebaseConfig as firebase };