import React from "react";

import { layout } from "../styles/Layout.module.scss";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import Signin from "./Auth/signin";
import Signup from "./Auth/signup";
import Signout from "./Auth/signout";
import Loader from "./Loader";
import Formaddmenu from "./menus/formaddmenu";
import Placeorder from "./placeorder";
import Rejectmodal from "./rejectmodal";
import Rejectinfo from "./rejectinfo";
import Completeinfo from "./completedinfo";
import Cancelorder from "./cancelorder";
const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <LayoutHeader />
      {children}
      <Signin />
      <Signup />
      <Signout />
      <Loader />
      <Formaddmenu />
      <Rejectmodal />
      <Rejectinfo />
      <Completeinfo />
      <Placeorder />
      <Cancelorder />
      <LayoutFooter />
    </div>
  );
};

export default Layout;
