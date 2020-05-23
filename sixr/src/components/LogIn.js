import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  Paper,
  TextField,
  Link,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import mainImage from "../assets/login_main_image.svg";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    backgroundImage: `url(${mainImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));
export const LogIn = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item style={{ margin: "auto" }}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          <div className={classes.mainImage} />
        </Grid>
      </Grid>
      <div style={{ padding: "15px", margin: "3em auto", maxWidth: "400px" }}>

        <form>
          <Paper style={{ padding: "15px" }}>
            <Grid container alignItems="flex-start" justify="center" spacing={2}>
            <Typography variant="h4" align="center" gutterBottom color="secondary">
          Log In!
        </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                />
              </Grid>
              <Grid item style={{ width:"100%" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Typography >
                  New User?
                  <Link
                    color="secondary"
                    component={RouterLink}
                    to="createcampange"
                  >
                    {" "}
                    Click Here{" "}
                  </Link>
                  to create an account.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
    </>
  );
};

// component={Link}
// to="createcampange"
