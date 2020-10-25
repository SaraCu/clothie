import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDUMVHnmHJgy4hOA7EES9VUFlXyNAm3DpY",
  authDomain: "clothie-db.firebaseapp.com",
  databaseURL: "https://clothie-db.firebaseio.com",
  projectId: "clothie-db",
  storageBucket: "clothie-db.appspot.com",
  messagingSenderId: "350288799914",
  appId: "1:350288799914:web:525358356cc32f9eacc8d3",
  measurementId: "G-463QN7MZLT",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
