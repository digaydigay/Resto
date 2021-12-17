import { useAuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { useRouter } from "next/router";
export function ActionForm() {
  const { google, signup, hidemodal, signout, currentUser } = useAuthContext();
  const Router = useRouter();
  const onSignUp = async ({ email, password, name }) => {
    try {
      const { user } = await signup(email, password);
      const userRef = db.doc(`users/${user.uid}`);
      const snap = await userRef.get();
      hidemodal();

      await auth.currentUser.updateProfile({
        displayName: name,
      });
      if (!snap.exists) {
        useRef.set({
          displayName: name,
          email: user.email,
          photoURL: null,
          birthdate: null,
          study: null,
          uid: user.uid,
          createdAt: new Date(),
        });
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  };

  const googleprovider = async () => {
    try {
      const { user } = await google();
      let useRef = db.doc(`users/${user.uid}`);
      const snap = await useRef.get();
      hidemodal();

      if (!snap.exists) {
        useRef.set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          birthdate: null,
          study: null,
          uid: user.uid,
          createdAt: new Date(),
        });
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onsignout = async () => {
    try {
      Router.replace("/");

      await signout();
      await hidemodal();
    } catch (e) {
      return null;
    }
  };
  return { googleprovider, onSignUp, onsignout };
}
