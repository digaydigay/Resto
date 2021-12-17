import React, { useState } from "react";
import { useRouter } from "next/router";
import Cartlayout from "../Cartlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import Image from "next/image";
const Rejected = () => {
  const { currentUser, orders } = useAuthContext();
  const [reject, setReject] = useState(false);

  return (
    <Cartlayout>
      <div className="rejectedorders">
        {orders && currentUser
          ? orders
              .filter((order) => {
                if (
                  order.status === "rejected" &&
                  currentUser.uid === order.uid
                ) {
                  return order;
                }
              })
              .map((rejected, index) => {
                return (
                  <div className="rejected-order">
                    <div className="tag">
                      <i className="fas fa-tags"></i>
                      <h1>{index + 1}</h1>
                    </div>

                    <div className="img">
                      <Image
                        src={rejected.foodPhoto}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="rejected-info">
                      <h4>{rejected.foodName}</h4>
                      <p>
                        <b>Delivery Address: </b> {rejected.address}
                      </p>
                      <p>
                        <b>Price: </b>
                        {rejected.price}
                      </p>

                      <p>
                        <b>Quantity: </b>
                        {rejected.quantity}
                      </p>
                      <p>
                        <b>Total: </b>
                        {rejected.total}
                      </p>
                      <p>
                        <b>Date rejected: </b>
                        {rejected.total}
                      </p>
                      <p>
                        <b>Reason of Rejecting:</b>
                        {rejected.message}
                      </p>
                    </div>
                  </div>
                );
              })
          : ""}
      </div>
    </Cartlayout>
  );
};

export default Rejected;
