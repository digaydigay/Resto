import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import { ActionForm } from "./actionform";

export default function Signup() {
  const { isAuthModal, hidemodal, signout } = useAuthContext();
  const { onsignout } = ActionForm();
  return (
    <div className={`signout ${isAuthModal === "signout" && "signout-show"}`}>
      <div>
        <h3>Are you sure to sigout</h3>
        <div>
          <button onClick={onsignout}>Yes</button>
          <button onClick={() => hidemodal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
