import React from "react";
import Image from "next/image";
import loader from "../public/assets/resto.gif";
import { loaderStyle } from "../styles/Layout.module.scss";
import { useLoader } from "../context/loader";
const Loader = () => {
  const { isLoader } = useLoader();

  return (
    <>
      {isLoader && (
        <div className={loaderStyle}>
          <div>
            <Image src={loader} />
          </div>
        </div>
      )}
    </>
  );
};
export default Loader;
