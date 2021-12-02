import { useContext, createContext, useState, useEffect } from "react";
import { auth, Facebook, Google } from "../../firebase";
const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthModal, setIsAuthModal] = useState("none");
  console.log(currentUser);

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
  const hidemodal = () => {
    setIsAuthModal("none");
  };
  const facebook = () => {
    auth.signInWithPopup(Facebook);
  };
  const google = () => {
    auth.signInWithPopup(Google);
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
    signin,
    signup,
    showsignupmodal,
    hidemodal,
    facebook,
    google,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
