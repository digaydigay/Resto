import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import { ActionForm } from "./actionform";

export default function Signup() {
  const { isModal, hidemodal, signout } = useAuthContext();
  const { onsignout } = ActionForm();
  return (
    <div className={`signout ${isModal === "signout" && "signout-show"}`}>
      <div>
        <h3>Are you sure to signout</h3>
        <div>
          <button onClick={onsignout}>Yes</button>
          <button onClick={() => hidemodal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
