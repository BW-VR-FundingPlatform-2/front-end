import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, useTheme } from "@material-ui/styles";
import sixr_logo from "../assets/sixr_logo.svg";
import { Link } from "react-router-dom";

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

const useStyles = makeStyles((theme) => ({
  header_Margin: {
    // ...theme.mixins.Toolbar,
    // marginBottom: "3em",
    // [theme.breakpoints.down("ms")] : {
    //     marginBottom: "2em"
    // },
    // [theme.breakpoints.down("xs")] : {
    //     marginBottom: "1.25em"
    // },
  },
  sixr_logo: {
    padding: "30px",
    width: "10%",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px",
  },
}));

function Header() {
  const header_Styles = useStyles();
  const [value, setValue] = useState(0);
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/portfolio" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/about" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contact" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  const tabs = (
      <>
                <Tabs
              className={header_Styles.tabContainer}
              value={value}
              onChange={(event, value) => {
                setValue(value);
              }}
            >
              <Tab
                className={header_Styles.tab}
                label="Create A Campaign"
                component={Link}
                to="/createcapaign"
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
                label="About"
                component={Link}
                to="/about"
                disableRipple
              />
              <Tab
                className={header_Styles.tab}
                label="Log In"
                component={Link}
                to="/login"
                disableRipple
              />
            </Tabs>
      </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar position="static" color="transparent">
          <Toolbar>
              <img className={header_Styles.sixr_logo} src={sixr_logo} alt="Site sixr_logo" />
              {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={header_Styles.header_Margin} />
    </>
  );
}

export default Header;
