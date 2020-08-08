import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUuTAptHKVZNEFIIfqEttnldzeDCU46GA",
    authDomain: "the-crwn-db-55a84.firebaseapp.com",
    databaseURL: "https://the-crwn-db-55a84.firebaseio.com",
    projectId: "the-crwn-db-55a84",
    storageBucket: "the-crwn-db-55a84.appspot.com",
    messagingSenderId: "1081589571679",
    appId: "1:1081589571679:web:8ec1451ba1c6a8f8f9bbea",
    measurementId: "G-V5KBV45NGQ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
