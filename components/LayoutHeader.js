import React, { useState } from "react";

import resto from "../public/assets/resto.png";
import Image from "next/image";

const LayoutHeader = () => {
  const [active, setActive] = useState("Home");

  const Active = (e) => {
    const { innerText } = e.target;
    setActive(innerText);
  };
  return (
    <div className="header">
      <div className="header_content">
        <div className="resto_logo">
          <Image src={resto} alt="resto" />
        </div>
        <ul className="header_nav">
          <li
            onClick={Active}
            className={`${active === "Home" && "li-active"}`}
          >
            Home
          </li>
          <li
            onClick={Active}
            className={`${active === "Menus" && "li-active"}`}
          >
            Menus
          </li>
          <li
            onClick={Active}
            className={`${active === "Contacts" && "li-active"}`}
          >
            Contacts
          </li>
          <li
            onClick={Active}
            className={`${active === "About" && "li-active"}`}
          >
            About
          </li>
        </ul>
        <div className="user"></div>
      </div>
    </div>
  );
};

export default LayoutHeader;
