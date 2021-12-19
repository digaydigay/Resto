import React from "react";
import { useOrderContext } from "../context/orderContext";
import Image from "next/image";
const Completeinfo = () => {
  const { completed, setCompleted } = useOrderContext();
  return (
    <>
      {completed && (
        <div className="completed-info">
          <div className="completed">
            <div className="exit">
              <i
                className="fas fa-times"
                onClick={() => {
                  setCompleted();
                }}
              ></i>
            </div>
            <div className="img">
              <Image
                src={completed.foodPhoto}
                width="180"
                height="180"
                alt="img"
              />
            </div>
            <div className="order-info">
              <h4>{completed.foodName}</h4>

              <p>
                <b>Delivery Address: </b> {completed.address}{" "}
              </p>

              <p>
                <b>Price: </b>
                {completed.price}
              </p>

              <p>
                <b>Quantity: </b>
                {completed.quantity}
              </p>
              <p>
                <b>Total: </b>
                {completed.total}
              </p>
              <p>
                <b>Reason: </b>
                {completed.message}
              </p>
              <p>
                <b>Date Completed: </b>
                {completed.time}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Completeinfo;
