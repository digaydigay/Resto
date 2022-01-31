import React, { useEffect } from "react";
import Image from "next/image";
import bg from "../../public/assets/banner2.jpg";
import OrderHeader from "./orderheader";
import { db } from "../../firebase";
import { useAuthContext } from "../../context/AuthProvider";
import { useRouter } from "next/router";
const OrderLayout = ({ children }) => {
  const { setOrders, currentUser } = useAuthContext();
  const Router = useRouter();

  useEffect(() => {
    !currentUser && Router.replace("/");
    const fetching = async () => {
      await db.collection("orders").onSnapshot((snap) => {
        setOrders(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    fetching();
  }, [currentUser, Router, setOrders]);
  return (
    <div className="order-layout">
      <Image
        src={bg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="bg"
        alt="img"
        priority
      />

      <OrderHeader />
      {children}
    </div>
  );
};

export default OrderLayout;
