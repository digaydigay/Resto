import React from "react";
import { useOrderContext } from "../context/orderContext";
import { db } from "../firebase";
import Image from "next/image";
const Cancelorder = () => {
  const { isCancel, setIsCancel } = useOrderContext();

  const Cancel = async (id) => {
    setTimeout(async () => {
      await db.collection("orders").doc(id).delete();
      setIsCancel();
    }, 1000);
  };
  return (
    <>
      {isCancel && (
        <div className="cancel-order">
          <div>
            <div className="img">
              <Image
                src={isCancel.foodPhoto}
                width="200"
                height="200"
                alt="img"
              />
            </div>
            <h6>{isCancel && isCancel.foodName}</h6>
            <h5>Are you sure to cancel this order?</h5>

            <div className="action">
              <button onClick={() => Cancel(isCancel.id)}>Yes</button>
              <button
                onClick={() => {
                  setIsCancel();
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cancelorder;
