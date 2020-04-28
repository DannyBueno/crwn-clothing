import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// crwn clothing Firebase configuration 
const config = {
    apiKey: "AIzaSyDCgzvF3s3IiXLhUo7FGeed8ye8uBjwurk",
    authDomain: "crwn-db-63f89.firebaseapp.com",
    databaseURL: "https://crwn-db-63f89.firebaseio.com",
    projectId: "crwn-db-63f89",
    storageBucket: "crwn-db-63f89.appspot.com",
    messagingSenderId: "2787963866",
    appId: "1:2787963866:web:f8f77215fa824a43cc46e3",
    measurementId: "G-L80J17LYLD"
  };

// initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  //google authentification utility 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;