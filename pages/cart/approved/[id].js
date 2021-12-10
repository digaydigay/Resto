import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cartlayout from "../Cartlayout";
import { useAuthContext } from "../../../context/AuthProvider";
const Aprroved = () => {
  const { currentUser } = useAuthContext();
  const Router = useRouter();
  useEffect(() => {
    !currentUser && Router.replace("/");
  }, []);
  return (
    <Cartlayout>
      <div className="approvedorders">
        <div className="noapprovedorders">
          <h3>{`${
            currentUser && currentUser.displayName
          } have  Aprroved orders...`}</h3>
        </div>
      </div>
    </Cartlayout>
  );
};

export default Aprroved;
