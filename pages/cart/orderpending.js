import React from "react";
import { useAuthContext } from "../../context/AuthProvider";
const OrderPending = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="orderpending">
      <div className="nopending">
        <h3>{`${
          currentUser && currentUser.displayName
        } have no any pending orders...`}</h3>
      </div>
    </div>
  );
};

export default OrderPending;
