import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBErTSBPnIWGtlf70BzhHLeMtS4E0URfPc",
  authDomain: "ekart-db.firebaseapp.com",
  databaseURL: "https://ekart-db.firebaseio.com",
  projectId: "ekart-db",
  storageBucket: "ekart-db.appspot.com",
  messagingSenderId: "1066931407977",
  appId: "1:1066931407977:web:e6409f97d9c260b10ae6f8",
  measurementId: "G-23RZBWJH6T",
};

export const createdUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

//   console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
