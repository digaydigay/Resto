import React from "react";
import { useRouter } from "next/router";

const Order = () => {
  const Router = useRouter();
  const id = Router.query;

  return <div>{id && id.id}</div>;
};
export default Order;
