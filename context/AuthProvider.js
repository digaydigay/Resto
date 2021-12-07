import { useContext, createContext, useState, useEffect } from "react";
import { auth, Google } from "../firebase";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthModal, setIsAuthModal] = useState("none");

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const showsigninmodal = () => {
    setIsAuthModal("signin");
  };
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const showsignupmodal = () => {
    setIsAuthModal("createaccount");
  };
  const showsignoutmodal = () => {
    setIsAuthModal("signout");
  };
  const hidemodal = () => {
    setIsAuthModal("none");
  };

  const google = () => {
    return auth.signInWithPopup(Google);
  };
  const signout = () => {
    return auth.signOut();
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const values = {
    currentUser,
    setCurrentUser,
    isAuthModal,
    setIsAuthModal,
    showsigninmodal,
    showsignoutmodal,
    signin,
    signup,
    showsignupmodal,
    hidemodal,
    signout,
    google,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
