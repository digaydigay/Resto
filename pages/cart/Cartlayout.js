import React from "react";
import Image from "next/image";
import CartHeader from "./cartHeader";
import bg from "../../public/assets/banner2.jpg";
const Cartlayout = ({ children }) => {
  return (
    <div className="cart-layout">
      <div className="bg">
        <Image
          src={bg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <CartHeader />
      {children}
    </div>
  );
};

export default Cartlayout;
