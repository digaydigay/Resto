import { useAuthContext } from "../../context/AuthProvider";
import { db } from "../../firebase";
export function ActionForm() {
  const { google, signup, hidemodal, signout } = useAuthContext();

  const onSignUp = async (email, password) => {
    try {
      const { user } = await signup(email, password);
      const userRef = db.doc(`users/${user.uid}`);
      const snap = await userRef.get();

      Cookies.set("user", JSON.stringify(user));
      if (!snap.exists) {
        useRef.set({
          displayName: user.displayName,
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
      await signout();
      await hidemodal();
    } catch (e) {
      return null;
    }
  };
  return { googleprovider, onSignUp, onsignout };
}
