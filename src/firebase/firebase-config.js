import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6NpjLBG98eIJfYQ9slD0Jk1Q5KXhuvrE",
  authDomain: "mecatronica-45e3d.firebaseapp.com",
  projectId: "mecatronica-45e3d",
  storageBucket: "mecatronica-45e3d.appspot.com",
  messagingSenderId: "883681133894",
  appId: "1:883681133894:web:58e49fd1be2d4dda3c9147"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
  firebase as default,
  googleAuthProvider
}