import React from "react";
import OrderLayout from "../orderlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import { useOrderContext } from "../../../context/orderContext";
const RejectClient = () => {
  const { orders } = useAuthContext();
  const { setRejectinfo } = useOrderContext();
  return (
    <OrderLayout>
      <div className="reject-wrapper">
        {orders &&
          orders
            .filter((reject) => {
              if (reject.status === "rejected") {
                return reject;
              }
            })
            .map((reject) => {
              return (
                <div className="reject-client">
                  <div className="name">{reject.person}</div>
                  <div className="time">{reject.time}</div>
                  <div className="info" onClick={() => setRejectinfo(reject)}>
                    <i className="fas fa-info-circle"></i>
                  </div>
                </div>
              );
            })}
      </div>
    </OrderLayout>
  );
};

export default RejectClient;
