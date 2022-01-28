import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const FirebaseCredentials = {
  apiKey: "AIzaSyBLnE0gKt52-Uc2M0u6Usb5SscH37r-4Wk",
  authDomain: "digay-resto.firebaseapp.com",
  projectId: "digay-resto",
  storageBucket: "digay-resto.appspot.com",
  messagingSenderId: "1088783776018",
  appId: "1:1088783776018:web:da5f7bc5429f3e347b5bcb",
};

// Initialize Firebase

// if a Firebase instance doesn't exist, create one
if (!Firebase.apps.length) {
  Firebase.initializeApp(FirebaseCredentials);
}
export const Google = new Firebase.auth.GoogleAuthProvider();
export const auth = Firebase.auth();
export const db = Firebase.firestore();
export const storage = Firebase.storage();
export default Firebase;
