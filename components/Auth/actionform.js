import { useAuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { useRouter } from "next/router";
export function ActionForm() {
  const { google, signup, hidemodal, signout, currentUser, signin } =
    useAuthContext();
  const Router = useRouter();
  const onSignUp = async ({ email, password, firstname, lastname }) => {
    try {
      const { user } = await signup(email, password);
      const userRef = db.doc(`users/${user.uid}`);
      const snap = await userRef.get();
      hidemodal();
      Router.replace("/menus");
      await auth.currentUser.updateProfile({
        displayName: `${firstname} ${lastname}`,
      });
      if (!snap.exists) {
        useRef.set({
          displayName: `${firstname} ${" "} ${lastname}`,
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

  const onSignin = async (email, password) => {
    try {
      await signin(email, password);
      hidemodal();
      Router.replace("/menus");
    } catch (e) {
      console.log(e);
    }
  };

  const googleprovider = async () => {
    try {
      const { user } = await google();
      let useRef = db.doc(`users/${user.uid}`);
      const snap = await useRef.get();
      hidemodal();
      Router.replace("/menus");
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
  return { googleprovider, onSignUp, onsignout, onSignin };
}
