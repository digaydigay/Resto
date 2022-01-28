import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import OrderLayout from "../orderlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import { useLoader } from "../../../context/loader";
import { db } from "../../../firebase";
const PendingOrder = () => {
  const { currentUser, orders } = useAuthContext();
  const dateinit = new Date();
  const date = dateinit.toDateString();
  const time = dateinit.toLocaleTimeString();

  const complete = async (id) => {
    try {
      await db
        .collection("orders")
        .doc(id)
        .update({
          status: "completed",
          time: `${date},${time}`,
        });
    } catch {
      return null;
    }
  };

  return (
    <OrderLayout>
      <div className="approvedorders">
        {orders && currentUser
          ? orders
              .filter((order) => {
                if (order.status === "approved") {
                  return order;
                } else {
                  return null;
                }
              })
              .map((approved, index) => {
                return (
                  <div className="approvedorder" key={index}>
                    <div className="tag">
                      <i className="fas fa-tags"></i>
                      <h1>{index + 1}</h1>
                    </div>
                    <div className="img">
                      <Image
                        src={approved.foodPhoto}
                        width="180"
                        height="180"
                        alt="img"
                      />
                    </div>
                    <div className="order-info">
                      <h4>{approved.foodName}</h4>
                      <p>
                        <b>Delivery Address: </b> {approved.address}{" "}
                      </p>
                      <p>
                        <b>Price: </b>P{approved.price}
                      </p>

                      <p>
                        <b>Quantity: </b>
                        {approved.quantity}
                      </p>
                      <p>
                        <b>Total: </b>P{approved.total}
                      </p>
                      <p>
                        <b>Date ordered:</b>
                        <div>{approved.time}</div>
                      </p>
                      <button
                        className="delete"
                        onClick={() => complete(approved.id)}
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                );
              })
          : ""}
      </div>
    </OrderLayout>
  );
};

export default PendingOrder;
