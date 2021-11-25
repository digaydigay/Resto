import React, { useState, useEffect, useRef } from "react";

import resto from "../public/assets/resto.png";
import Image from "next/image";
import { useRouter } from "next/router";

const LayoutHeader = ({}) => {
  const Router = useRouter();
  const [ulMobile, setUlMobile] = useState(false);
  const [headBg, setHeadBg] = useState(false);

  const Active = (e) => {
    const { innerText } = e.target;
    Router.push(
      `/${innerText.toLowerCase() === "home" ? "" : innerText.toLowerCase()}`
    );
    setUlMobile(!ulMobile);
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
  const onSetUlmobile = () => {
    setUlMobile(!ulMobile);
  };

  return (
    <div className={`header ${headBg && "headBg"}`}>
      <div className="header_content">
        <div className="resto_logo">
          <Image src={resto} alt="resto" />
        </div>
        <h3>esto</h3>
        <div className="header_nav">
          <div className="bar">
            <i className="fas fa-bars" onClick={onSetUlmobile}></i>
          </div>
          <ul className={`${ulMobile && "ul-mobile"}`}>
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
        </div>

        <div className="user">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
