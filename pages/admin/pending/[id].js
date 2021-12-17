import React from "react";
import OrderLayout from "../orderlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import { useOrderContext } from "../../../context/orderContext";
import { db } from "../../../firebase";
import Image from "next/image";
const OrderClient = () => {
  const { orders, currentUser, setIsModal } = useAuthContext();
  const { setReject } = useOrderContext();
  const rejected = (pending) => {
    setIsModal("rejectmodal");
    setReject(pending);
  };
  const approved = async (pending) => {
    await db.collection("orders").doc(pending.id).update({
      status: "approved",
    });
  };
  return (
    <OrderLayout>
      <div className="order-client">
        {orders &&
          currentUser &&
          orders
            .filter((order) => {
              if (order.status === "pending") {
                return order;
              } else {
                return null;
              }
            })
            .map((pending, index) => {
              return (
                <>
                  {pending && (
                    <div className="order-wrapper">
                      <div className="tag">
                        <i className="fas fa-tags"></i>
                        <h1>{index + 1}</h1>
                      </div>
                      <div className="img">
                        <Image
                          src={pending.foodPhoto}
                          width="180"
                          height="180"
                        />
                      </div>
                      <div className="order-info">
                        <h4>{pending.foodName}</h4>
                        <p>
                          <b>Client: </b> {pending.person}{" "}
                        </p>
                        <p>
                          <b>Delivery Address: </b> {pending.address}{" "}
                        </p>
                        <p>
                          <b>Email: </b> {pending.email}{" "}
                        </p>
                        <p>
                          <b>Contact: </b> {pending.contact}{" "}
                        </p>

                        <p>
                          <b>Price: </b>
                          {pending.price}
                        </p>

                        <p>
                          <b>Quantity: </b>
                          {pending.quantity}
                        </p>
                        <p>
                          <b>Total: </b>
                          {pending.total}
                        </p>
                        <button onClick={() => rejected(pending)}>
                          Reject
                        </button>
                        <button
                          className="delete"
                          onClick={() => approved(pending)}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  )}
                  {!pending && <div>no records found</div>}
                </>
              );
            })}
      </div>
    </OrderLayout>
  );
};

export default OrderClient;
