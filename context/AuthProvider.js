import { useContext, createContext, useState, useEffect } from "react";
import { auth, Google } from "../firebase";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isModal, setIsModal] = useState("none");

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const showsigninmodal = () => {
    setIsModal("signin");
  };
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const showsignupmodal = () => {
    setIsModal("createaccount");
  };
  const showsignoutmodal = () => {
    setIsModal("signout");
  };
  const showaddmenumodal = () => {
    setIsModal("addmenu");
  };
  const showplaceorder = () => {
    setIsModal("placeorder");
  };
  const hidemodal = () => {
    setIsModal("none");
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
    isModal,
    setIsModal,
    showsigninmodal,
    showsignoutmodal,
    showaddmenumodal,
    showplaceorder,
    signin,
    signup,
    showsignupmodal,
    hidemodal,
    signout,
    google,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
