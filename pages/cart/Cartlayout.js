import React from "react";
import Image from "next/image";
import CartHeader from "./cartHeader";
import bg from "../../public/assets/banner2.jpg";
import { useEffect } from "react";
import { db } from "../../firebase";
import { useAuthContext } from "../../context/AuthProvider";
import { useRouter } from "next/router";
const Cartlayout = ({ children }) => {
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
  }, [currentUser]);
  return (
    <div className="cart-layout">
      <Image
        src={bg}
        alt="img"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="bg"
      />

      <CartHeader />
      {children}
    </div>
  );
};

export default Cartlayout;
