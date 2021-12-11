import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cartlayout from "../Cartlayout";
import { useAuthContext } from "../../../context/AuthProvider";
import { db } from "../../../firebase";
const PendingOrder = () => {
  const { currentUser } = useAuthContext();
  const [pendings, setPendings] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const fetching = async () => {
      await db.collection("orders").onSnapshot((snap) => {
        setPendings(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    fetching();
  }, []);

  useEffect(() => {
    !currentUser && Router.replace("/");
  }, []);

  const del = async (id) => {
    await db.collection("orders").doc(id).delete();
  };

  return (
    <Cartlayout>
      <div className="pendingorders">
        {pendings && currentUser ? (
          pendings
            .filter((pending) => {
              if (pending.uid === currentUser.uid) {
                return pending;
              } else {
                return null;
              }
            })
            .map((pending, index) => {
              return (
                <div className="order" key={index}>
                  <div className="tag">
                    <i className="fas fa-tags"></i>
                    <h1>{index + 1}</h1>
                  </div>
                  <div className="img">
                    <Image src={pending.foodPhoto} width="180" height="180" />
                  </div>
                  <div className="order-info">
                    <h4>{pending.foodName}</h4>
                    <p>
                      <b>Delivery Address: </b> {pending.address}{" "}
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
                    <button className="delete" onClick={() => del(pending.id)}>
                      Cancel order
                    </button>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="nopendingorder">
            <h3>{`${
              currentUser && currentUser.displayName
            } have no any pending orders...`}</h3>
            <button onClick={() => Router.replace("/menus")}>
              Please add Order <i className="fas fa-plus-circle"></i>
            </button>
          </div>
        )}
      </div>
    </Cartlayout>
  );
};

export default PendingOrder;