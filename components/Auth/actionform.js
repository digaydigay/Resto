import React from "react";
import { useAuthContext } from "../../context/reducers/AuthProvider";

export function ActionForm() {
  const { facebook, google, signup } = useAuthContext();

  const onSignUp = async (email, password) => {
    const { user } = await signup(email, password);
    console.log(user);
  };

  const facebookprovider = async () => {
    await facebook();
  };
  const googleprovider = async () => {
    try {
      await google();
    } catch (error) {
      console.log(error);
    }
  };
  return { facebookprovider, googleprovider, onSignUp };
}
