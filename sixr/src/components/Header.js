import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import sixr_logo from "../assets/sixr_logo.svg";
import { Link } from "react-router-dom";
// import { useStyles } from '../theme/componentStyles/headerStyles'
import { useStyles } from "../theme/componentStyles/headerStyles";
import { connect } from "react-redux";

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

function Header(props) {
  const header_Styles = useStyles();

  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   if (window.location.pathname === "/" && value !== 0) {
  //     setValue(0);
  //   } else if (window.location.pathname === "/createcampaign" && value !== 1) {
  //     setValue(1);
  //   } else if (window.location.pathname === "/browseprojects" && value !== 2) {
  //     setValue(2);
  //   } else if (window.location.pathname === "/about" && value !== 3) {
  //     setValue(3);
  //   } else if (window.location.pathname === "/signUp" && value !== 4) {
  //     setValue(4);
  //   } else if (window.location.pathname === "/dashboard" && value !== 5) {
  //     setValue(5);
  //   }
  // }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="sticky" color="inherit">
          <Toolbar>
            <img
              className={header_Styles.sixr_logo}
              src={sixr_logo}
              alt="Site sixr_logo"
            />
            <Tabs
              className={header_Styles.tabContainer}
              value={0}
              // onChange={(event, value) => {
              //   setValue(value);
              // }}
            >
              <Tab
                className={header_Styles.tab}
                label="Home"
                component={Link}
                to="/"
                disableRipple
              />
              <Tab
                className={header_Styles.tab}
                label="Browse Projects"
                component={Link}
                to="/browseprojects"
                disableRipple
              />
              <Tab
                className={header_Styles.tab}
                label="About Us"
                component={Link}
                to="/about"
                disableRipple
              />

              {/* If there a token in local storage, the Sign Up tab will unmount */}
              {localStorage.getItem("token") === true ? null : (
                <Tab
                  className={header_Styles.tab}
                  label="Register"
                  component={Link}
                  to="/register"
                  disableRipple
                />
              )}

              {/* Checks local storage for a token, if it returns falsy/null the tab will not render, if true it will render */}
              {localStorage.getItem("token") && (
                <Tab
                  className={header_Styles.tab}
                  label="Create A Campaign"
                  component={Link}
                  to="createcampange"
                  disableRipple
                />
              )}

              {/* This Is a Test Tab for Dashboard.  Will Be removed, and put on a private route */}
              <Tab
                className={header_Styles.tab}
                label="Dashboard"
                component={Link}
                to="/dashboard"
                disableRipple
              />

              {/* {localStorage.getItem("token") ? <LogOut /> : null} */}
              
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={header_Styles.header_Margin} />
    </>
  );
}

export default Header;
