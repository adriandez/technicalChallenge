import React, { useState } from "react";
import { Button } from "@material-ui/core/";
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import MenuIcon from "@material-ui/icons/Menu";

import "./Nav.scss";

const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav className="Nav">
      <React.Fragment key="top">
        <Button>
          <MenuIcon />
        </Button>
        <DrawerComponent
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        ></DrawerComponent>
      </React.Fragment>
    </nav>
  );
};

export default Nav;
