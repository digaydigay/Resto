import React from "react";
import OrderLayout from "../orderlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import { useOrderContext } from "../../../context/orderContext";
const Completed = () => {
  const { orders } = useAuthContext();
  const { setCompleted } = useOrderContext();
  return (
    <OrderLayout>
      <div className="completed-wrapper">
        {orders &&
          orders
            .filter((complete) => {
              if (complete.status === "completed") {
                return complete;
              }
            })
            .map((complete) => {
              return (
                <div className="completed-client">
                  <div className="name">{complete.person}</div>
                  <div className="time">{complete.time}</div>
                  <div className="info" onClick={() => setCompleted(complete)}>
                    <i className="fas fa-info-circle"></i>
                  </div>
                </div>
              );
            })}
      </div>
    </OrderLayout>
  );
};

export default Completed;
