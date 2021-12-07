import React from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const params = useRouter();

  console.log(params.query.id);
  return <div>This id cart section</div>;
};

export default Cart;
