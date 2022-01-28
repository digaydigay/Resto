import React from "react";
import resto from "../public/assets/resto.png";
import Image from "next/image";
const LayoutFooter = () => {
  return (
    <div className="footer">
      <div className="column1">
        <div className="logo">
          <Image src={resto} alt="resto" />
        </div>
        <h2>Resto</h2>
        <p> ©2021 All rights reserved : code by digay</p>
      </div>
      <div className="column2">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="column3">
        <ul>
          <li>
            <i className="fab fa-facebook"></i>
          </li>

          <li>
            <i className="fab fa-youtube"></i>
          </li>
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutFooter;
