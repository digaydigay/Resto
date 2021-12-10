import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cartlayout from "../Cartlayout";
import { useAuthContext } from "../../../context/AuthProvider";
const Completed = () => {
  const { currentUser } = useAuthContext();
  const Router = useRouter();
  useEffect(() => {
    !currentUser && Router.replace("/");
  }, []);
  return (
    <Cartlayout>
      <div className="completedorders">
        <div className="nocompletedorders">
          <h3>{`${
            currentUser && currentUser.displayName
          } have completed orders...`}</h3>
        </div>
      </div>
    </Cartlayout>
  );
};

export default Completed;
