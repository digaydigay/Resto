import React, { useState, useEffect, useRef } from "react";

import resto from "../public/assets/resto.png";
import Image from "next/image";
import { useRouter } from "next/router";

const LayoutHeader = ({}) => {
  const Router = useRouter();

  const [headBg, setHeadBg] = useState(false);

  const Active = (e) => {
    const { innerText } = e.target;
    Router.push(
      `/${innerText.toLowerCase() === "home" ? "" : innerText.toLowerCase()}`
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHeadBg(true);
      } else {
        setHeadBg(false);
      }
    });
  });

  return (
    <div className={`header ${headBg && "headBg"}`}>
      <div className="header_content">
        <div className="resto_logo">
          <Image src={resto} alt="resto" />
        </div>
        <ul className="header_nav">
          <li
            onClick={Active}
            className={`${Router.asPath === "/" && "li-active"}`}
          >
            Home
          </li>

          <li
            onClick={Active}
            className={`${Router.asPath === "/menus" && "li-active"}`}
          >
            Menus
          </li>
          <li
            onClick={Active}
            className={`${Router.asPath === "/contacts" && "li-active"}`}
          >
            Contacts
          </li>
          <li
            onClick={Active}
            className={`${Router.asPath === "/about" && "li-active"}`}
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
