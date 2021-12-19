import React from "react";
import Cartlayout from "../Cartlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import { useOrderContext } from "../../../context/orderContext";
const RejectClient = () => {
  const { orders, currentUser } = useAuthContext();
  const { setRejectinfo } = useOrderContext();
  return (
    <Cartlayout>
      <div className="reject-wrapper">
        {orders &&
          orders
            .filter((reject) => {
              if (
                reject.status === "rejected" &&
                reject.uid === currentUser.uid
              ) {
                return reject;
              }
            })
            .map((reject, i) => {
              return (
                <div className="reject-client" key={i}>
                  <div className="name">{reject.foodName}</div>
                  <div className="time">{reject.time}</div>
                  <div className="info" onClick={() => setRejectinfo(reject)}>
                    <i className="fas fa-info-circle"></i>
                  </div>
                </div>
              );
            })}
      </div>
    </Cartlayout>
  );
};

export default RejectClient;
