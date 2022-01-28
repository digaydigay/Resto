import React, { useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import { layout } from "../styles/Layout.module.scss";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import Signin from "./Auth/signin";
import Signup from "./Auth/signup";
import Signout from "./Auth/signout";
import Formaddmenu from "./menus/formaddmenu";
import Placeorder from "./placeorder";
import Rejectmodal from "./rejectmodal";
import Rejectinfo from "./rejectinfo";
import Completeinfo from "./completedinfo";
import Cancelorder from "./cancelorder";

import { useLoader } from "../context/loader";
import Profile from "./Profile";
const Layout = ({ children }) => {
  const { isLoader } = useLoader();
  return (
    <div className={layout}>
      <LayoutHeader />
      {children}
      <Signin />
      <Signup />
      <Signout />
      <Formaddmenu />
      <Rejectmodal />
      <Rejectinfo />
      <Completeinfo />
      <Placeorder />
      <Cancelorder />
      <LayoutFooter />
      <Profile />
      {isLoader && (
        <div className="loading">
          <Button variant="primary" disabled>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Layout;
