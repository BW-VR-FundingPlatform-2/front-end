import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";

import { useStyles } from '../theme/componentStyles/footerStyles'
import sixr_logo from "../assets/sixr_logo.svg";

function Header() {
  const header_Styles = useStyles();

  return (
    <>
        {/* elevation={0} removes box shadow form appbar */}
        <AppBar position="static" color="transparent" elevation={0} >
          <Toolbar>
              <img className={header_Styles.sixr_logo} src={sixr_logo} alt="Site sixr_logo" />
          </Toolbar>
        </AppBar>
      <div />
    </>
  );
}

export default Header;
