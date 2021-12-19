import React from "react";
import { useOrderContext } from "../context/orderContext";
import Image from "next/image";
const Rejectinfo = () => {
  const { rejectinfo, setRejectinfo } = useOrderContext();
  return (
    <>
      {rejectinfo && (
        <div className="reject-info">
          <div className="reject">
            <div className="exit">
              <i
                className="fas fa-times"
                onClick={() => {
                  setRejectinfo();
                }}
              ></i>
            </div>
            <div className="img">
              <Image
                src={rejectinfo.foodPhoto}
                width="180"
                height="180"
                alt="img"
              />
            </div>
            <div className="order-info">
              <h4>{rejectinfo.foodName}</h4>

              <p>
                <b>Delivery Address: </b> {rejectinfo.address}{" "}
              </p>

              <p>
                <b>Price: </b>
                {rejectinfo.price}
              </p>

              <p>
                <b>Quantity: </b>
                {rejectinfo.quantity}
              </p>
              <p>
                <b>Total: </b>
                {rejectinfo.total}
              </p>
              <p>
                <b>Reason: </b>
                {rejectinfo.message}
              </p>
              <p>
                <b>Date Rejected: </b>
                {rejectinfo.time}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rejectinfo;
