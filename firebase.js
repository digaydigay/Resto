import Firebase from "firebase/app";
import "firebase/auth";

const FirebaseCredentials = {
  apiKey: "AIzaSyDl_MwkUYLX8QqlTPBE-gvf-Sby5MkLNe8",
  authDomain: "resto-fdd8e.web.app",
  projectId: "resto-fdd8e",
  storageBucket: "resto-fdd8e.appspot.com",
  messagingSenderId: "194730069308",
  appId: "1:194730069308:web:812f2eaaf085776761e239",
};

// Initialize Firebase

// if a Firebase instance doesn't exist, create one
if (!Firebase.apps.length) {
  Firebase.initializeApp(FirebaseCredentials);
}
export const Google = new Firebase.auth.GoogleAuthProvider();
export const Facebook = new Firebase.auth.FacebookAuthProvider();
export const auth = Firebase.auth();
export default Firebase;
