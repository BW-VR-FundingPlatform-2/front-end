import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import sixr_logo from "../assets/sixr_logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(() => ({
  sixr_logo: {
    padding: "30px",
    width: "10%",
    margin:"auto"
  },
}));

function Header() {
  const header_Styles = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="static" color="transparent">
          <Toolbar>
              <img className={header_Styles.sixr_logo} src={sixr_logo} alt="Site sixr_logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={header_Styles.header_Margin} />
    </>
  );
}

export default Header;
