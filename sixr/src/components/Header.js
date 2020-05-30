import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import sixr_logo from "../assets/sixr_logo.svg";
import { Link } from "react-router-dom";

// import { useStyles } from '../theme/componentStyles/headerStyles'
import { useStyles } from "../theme/componentStyles/headerStyles";
import { connect } from "react-redux";
//components
import LogOut from "./LogOut";

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

              {props.success === false ? (
                <Tab
                  className={header_Styles.tab}
                  label="Sign Up"
                  component={Link}
                  to="/signUp"
                  disableRipple
                />
              ) : null}

              {/* Just realized this is a security flaw, you can bypass the login by adding "token" to local storage.  If you refresh the page, you're logged in.  I'll have to save the token to state.  And render the component only if my token matches.  Accidentally hacked my own site.  */}
              {/* Checks local storage for a token, if it returns falsy/null the tab will not render, if true it will render */}
              {/* {localStorage.getItem("token") && (
                <Tab
                  className={header_Styles.tab}
                  label="Create A Campaign"
                  component={Link}
                  to="createcampaign"
                  disableRipple
                />
              )} */}
              {/* These last 3 taps will render when a user is logged in */}
              {props.success && (
                <Tab
                  className={header_Styles.tab}
                  label="Create A Campaign"
                  component={Link}
                  to="/createcampaignbyryan"
                  disableRipple
                />
              )}

              {/* This Is a Test Tab for Dashboard.  Will Be removed, and put on a private route */}
              {props.success && (
                <Tab
                  className={header_Styles.tab}
                  label="Dashboard"
                  component={Link}
                  to="/dashboard"
                  disableRipple
                />
              )}

              {props.success && <LogOut />}
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={header_Styles.header_Margin} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    success: state.loginReducer.success,
  };
};

export default connect(mapStateToProps)(Header);
// render tabs only if token matches
