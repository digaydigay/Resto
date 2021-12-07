import React from "react";

import { layout } from "../styles/Layout.module.scss";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import Signin from "./Auth/signin";
import Signup from "./Auth/signup";
import Signout from "./Auth/signout";
import Loader from "./Loader";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <LayoutHeader />
      {children}
      <Signin />
      <Signup />
      <Signout />
      <Loader />
      <LayoutFooter />
    </div>
  );
};

export default Layout;
