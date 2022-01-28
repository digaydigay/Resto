import { useAuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { useRouter } from "next/router";
import { useState } from "react";
export function ActionForm() {
  const { google, signup, hidemodal, signout, signin } = useAuthContext();
  const Router = useRouter();
  const [isSignUpERR, setSignupERR] = useState();
  const [isSigInERR, setSignInERR] = useState();
  const onSignUp = async ({ email, password, firstname, lastname }) => {
    try {
      const { user } = await signup(email, password);
      const userRef = db.doc(`users/${user.uid}`);
      const snap = await userRef.get();

      await auth.currentUser.updateProfile({
        displayName: `${firstname} ${lastname}`,
      });
      await hidemodal();
      await Router.replace("/menus");
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
      }
    } catch (e) {
      setSignupERR(e);
      return null;
    }
  };

  const onSignin = async (email, password) => {
    try {
      await signin(email, password);
      hidemodal();
      Router.replace("/menus");
    } catch (e) {
      setSignInERR(e);
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

      location.reload();
    } catch (e) {
      return null;
    }
  };
  return {
    googleprovider,
    onSignUp,
    onsignout,
    onSignin,
    isSignUpERR,
    isSigInERR,
  };
}
