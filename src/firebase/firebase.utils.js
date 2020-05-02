import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// crwn clothing Firebase configuration 
const config = {
    apiKey: 'AIzaSyDCgzvF3s3IiXLhUo7FGeed8ye8uBjwurk',
    authDomain: 'crwn-db-63f89.firebaseapp.com',
    databaseURL: 'https://crwn-db-63f89.firebaseio.com',
    projectId: 'crwn-db-63f89',
    storageBucket: 'crwn-db-63f89.appspot.com',
    messagingSenderId: '2787963866',
    appId: '1:2787963866:web:f8f77215fa824a43cc46e3'
    
  };

// function to take in user auth and store into DB

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth does not exist return
  if(!userAuth) return;

 //get back the userRef and get a snapShot
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

 //if snapSHot does not exists, create the data
  if (!snapShot.exists) {
    //need displayName & email from userAuth
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    // creating a new user using userAuth data
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);

    }
  }
  return userRef;
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