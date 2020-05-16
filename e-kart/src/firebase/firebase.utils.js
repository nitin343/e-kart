import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBErTSBPnIWGtlf70BzhHLeMtS4E0URfPc",
  authDomain: "ekart-db.firebaseapp.com",
  databaseURL: "https://ekart-db.firebaseio.com",
  projectId: "ekart-db",
  storageBucket: "ekart-db.appspot.com",
  messagingSenderId: "1066931407977",
  appId: "1:1066931407977:web:e6409f97d9c260b10ae6f8",
  measurementId: "G-23RZBWJH6T",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(provider)
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
console.log(errorMessage);
console.log(errorCode);

 
  
})

export default firebase;
