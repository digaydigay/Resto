import React from "react";
import { useAuthContext } from "../../../context/AuthProvider";
import { useOrderContext } from "../../../context/orderContext";
import Cartlayout from "../Cartlayout";
const Completed = () => {
  const { orders, currentUser } = useAuthContext();
  const { setCompleted } = useOrderContext();
  return (
    <Cartlayout>
      <div>
        {orders &&
          orders
            .filter((complete) => {
              if (
                complete.status === "completed" &&
                currentUser.uid === complete.uid
              ) {
                return complete;
              }
            })
            .map((complete, i) => {
              return (
                <div className="complete-order" key={i}>
                  <div className="name">{complete.foodName}</div>
                  <div className="time">{complete.time}</div>
                  <div className="info" onClick={() => setCompleted(complete)}>
                    <i className="fas fa-info-circle"></i>
                  </div>
                </div>
              );
            })}
      </div>
    </Cartlayout>
  );
};

export default Completed;
