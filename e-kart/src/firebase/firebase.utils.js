import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBErTSBPnIWGtlf70BzhHLeMtS4E0URfPc",
    authDomain: "ekart-db.firebaseapp.com",
    databaseURL: "https://ekart-db.firebaseio.com",
    projectId: "ekart-db",
    storageBucket: "ekart-db.appspot.com",
    messagingSenderId: "1066931407977",
    appId: "1:1066931407977:web:e6409f97d9c260b10ae6f8",
    measurementId: "G-23RZBWJH6T"
  };


  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;