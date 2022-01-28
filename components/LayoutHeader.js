import React, { useState, useEffect, useContext } from "react";

import resto from "../public/assets/resto.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/AuthProvider";
import { useToogle } from "../context/Toogle";
const LayoutHeader = ({}) => {
  const Router = useRouter();
  const [ulMobile, setUlMobile] = useState(false);
  const [headBg, setHeadBg] = useState(false);
  const { setIsProfile } = useToogle();
  const cartpath = Router.pathname.slice(0, 5);
  const adminpath = Router.pathname.slice(0, 6);

  const { showsigninmodal, showsignupmodal, currentUser, showsignoutmodal } =
    useAuthContext();

  const Active = (e) => {
    const { innerText } = e.target;
    Router.push(
      `/${innerText.toLowerCase() === "home" ? "" : innerText.toLowerCase()}`
    );
    setUlMobile(!ulMobile);
  };

  const onSetUlmobile = () => {
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
  }, []);

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
              HOME
            </li>

            <li
              onClick={Active}
              className={`${Router.asPath === "/menus" && "li-active"}`}
            >
              MENUS
            </li>
            <li
              onClick={Active}
              className={`${Router.asPath === "/contact" && "li-active"}`}
            >
              CONTACT
            </li>
            <li
              onClick={Active}
              className={`${Router.asPath === "/resto" && "li-active"}`}
            >
              RESTO
            </li>
          </ul>
        </div>
        {currentUser && currentUser.email === "jonathan.digay1@gmail.com" && (
          <div
            className={`orders ${adminpath === "/admin" && "admin-active"}`}
            onClick={() => {
              Router.replace(
                `/admin/pending/${currentUser && currentUser.uid}`
              );
            }}
          >
            <i className="fas fa-concierge-bell"></i>
          </div>
        )}

        <div
          className={`cart ${cartpath === "/cart" && "cart-active"}`}
          onClick={() => {
            if (!currentUser) {
              return showsignupmodal();
            }
            Router.replace(`/cart/pending/${currentUser && currentUser.uid}`);
          }}
        >
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="user" onClick={() => setIsProfile(true)}>
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
