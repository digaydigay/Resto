import React from "react";
import Image from "next/image";
import Cartlayout from "../Cartlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import { useOrderContext } from "../../../context/orderContext";
const PendingOrder = () => {
  const { currentUser, orders } = useAuthContext();
  const { setIsCancel } = useOrderContext();
  return (
    <Cartlayout>
      <div className="pendingorders">
        {orders && currentUser
          ? orders
              .filter((order) => {
                if (
                  order.status === "pending" &&
                  order.uid === currentUser.uid
                ) {
                  return order;
                } else {
                  return null;
                }
              })
              .map((pending, index) => {
                return (
                  <div className="order" key={index}>
                    <div className="tag">
                      <h1>{index + 1}</h1>
                    </div>
                    <div className="img">
                      <Image src={pending.foodPhoto} width="180" height="180" />
                      <div>
                        <p>x{pending.quantity}</p>
                      </div>
                    </div>
                    <div className="order-info">
                      <h4>{pending.foodName}</h4>
                      <p>
                        <b>Delivery Address: </b> {pending.address}{" "}
                      </p>
                      <p>
                        <b>Price: </b>P{pending.price}
                      </p>

                      <p>
                        <b>Total: </b>P{pending.total}
                      </p>
                      <p>
                        <b>Date ordered:</b>
                        <div> {pending.time}</div>
                      </p>
                      <button>Contact</button>
                      <button
                        className="delete"
                        onClick={() => setIsCancel(pending)}
                      >
                        Cancel order
                      </button>
                    </div>
                  </div>
                );
              })
          : ""}
      </div>
    </Cartlayout>
  );
};

export default PendingOrder;
