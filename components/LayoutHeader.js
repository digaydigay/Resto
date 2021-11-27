import React, { useState, useEffect } from "react";

import resto from "../public/assets/resto.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { signin, createaccount } from "../redux/reducer/showAuthForm";
import { useDispatch } from "react-redux";

const LayoutHeader = ({}) => {
  const Router = useRouter();
  const [ulMobile, setUlMobile] = useState(false);
  const [headBg, setHeadBg] = useState(false);
  const dispatch = useDispatch();

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
          <div className={`bar ${ulMobile && "barX"}`} onClick={onSetUlmobile}>
            <div className="line"></div>
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
            <li>Privacy {`&`} Policy</li>
          </ul>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="user">
          <i className="fas fa-user"></i>

          <ul className="user-nav">
            <li onClick={() => dispatch(signin())}>sign in</li>
            <li onClick={() => dispatch(createaccount())}>Create Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
