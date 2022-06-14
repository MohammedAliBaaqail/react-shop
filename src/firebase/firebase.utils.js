import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCNqnCI4gDEAdTvWFa046oexdDL9VyNPok",
    authDomain: "reactshop-f4b33.firebaseapp.com",
    projectId: "reactshop-f4b33",
    storageBucket: "reactshop-f4b33.appspot.com",
    messagingSenderId: "1210792543",
    appId: "1:1210792543:web:c2efd68b426383586a79ea",
    measurementId: "G-3T1Z4DSXTD"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;