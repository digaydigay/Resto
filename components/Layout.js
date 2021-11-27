import React from "react";

import { layout } from "../styles/Layout.module.scss";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import Signin from "./Auth/signin";
import Signup from "./Auth/signup";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <LayoutHeader />
      {children}
      <Signin />
      <Signup />
      <LayoutFooter />
    </div>
  );
};

export default Layout;
