import React from "react";
import Cartlayout from "../Cartlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import Image from "next/image";
const Aprroved = () => {
  const { currentUser, orders } = useAuthContext();

  return (
    <Cartlayout>
      <div className="approvedorders">
        {orders && currentUser ? (
          orders
            .filter((order) => {
              if (
                order.status === "approved" &&
                currentUser.uid === order.uid
              ) {
                return order;
              } else {
                return null;
              }
            })
            .map((approve, index) => {
              return (
                <div className="approved-order" key={index}>
                  <div className="tag">
                    <i className="fas fa-tags"></i>
                    <h1>{index + 1}</h1>
                  </div>

                  <div className="img">
                    <Image
                      src={approve.foodPhoto}
                      width={200}
                      height={200}
                      alt="img"
                    />
                  </div>
                  <div className="approve-info">
                    <h4>{approve.foodName}</h4>
                    <p>
                      <b>Delivery Address: </b> {approve.address}
                    </p>
                    <p>
                      <b>Price: </b>
                      {approve.price}
                    </p>

                    <p>
                      <b>Quantity: </b>
                      {approve.quantity}
                    </p>
                    <p>
                      <b>Total: </b>
                      {approve.total}
                    </p>
                    <p>
                      <b>Date Approved: </b>
                      {approve.total}
                    </p>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="noapprovedorders">
            <h3>{`${
              currentUser && currentUser.displayName
            } have  Aprroved orders...`}</h3>
          </div>
        )}
      </div>
    </Cartlayout>
  );
};

export default Aprroved;
