import React from "react";

import { layout } from "../styles/Layout.module.scss";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <LayoutHeader />
      {children}

      <LayoutFooter />
    </div>
  );
};

export default Layout;
