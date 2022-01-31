import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROGJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSendefirebasrId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
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
