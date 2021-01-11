import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAfkrgF-M6r_mlHixBi2d5e6Q50tuBRItQ",
  authDomain: "clothing-hub-c97d0.firebaseapp.com",
  projectId: "clothing-hub-c97d0",
  storageBucket: "clothing-hub-c97d0.appspot.com",
  messagingSenderId: "666343922401",
  appId: "1:666343922401:web:a352122284428e96fcb5a0"
};

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
      })
    } catch (error) {
      console.log('error creating new user', error.message);
    }
  };

  return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
