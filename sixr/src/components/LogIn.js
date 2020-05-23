import React, { useState, useEffect } from "react";
//connect function form redux
import { connect } from "react-redux";
//Link from react router
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom"
// all material UI style dependcies and images
import {
  Typography,
  Paper,
  TextField,
  Link,
  Grid,
  Button,
  CircularProgress,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import mainImage from "../assets/login_main_image.svg";

//Actions 
import loginAction from "../store/actions/loginAction";
import loginActionFail from '../store/actions/loginActionFail'
import loginSucess from '../store/actions/loginSucess'
import {fakeAPICallForTesting} from "../utils/fakeAPICallForTesting";

//styling for Image with Material UI
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

const LogIn = (props) => {
  //Allows to uses the styling useStyles above
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  //lets us use history api from react-router
  const history = useHistory();
  
//Form Handle Change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //when submitted different actions will be passed to the reducer depending on the username and password validation
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = formValues
    console.log("%c FormValues", "color:red", email, password);

    try {
      await fakeAPICallForTesting({email, password})
      props.loginAction(formValues);
      props.loginSucess()
      history.push("/dashboard")
    } catch (error) {
      props.loginActionFail()
    }


  };

  //This is the login form made with Material UI
  return (
    <>

      <Grid item style={{ margin: "auto" }}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          {/* This is the image  */}
          <div className={classes.mainImage} />
        </Grid>
      </Grid>
      <div style={{ padding: "15px", margin: "3em auto", maxWidth: "400px" }}>
        {/* This is the form  */}
        <form onSubmit={handleSubmit}>
          <Paper style={{ padding: "15px" }}>
            <Grid
              container
              alignItems="flex-start"
              justify="center"
              spacing={2}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                color="secondary"
              >
                Log In!
                {props.error && <FormHelperText style={{color:"red"}}>{props.errorMessage}</FormHelperText>}
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item style={{ width: "100%" }}>
                {/* The ternary will change the type of button, a submit or a loading state */}
                {props.isLoading ? (
                  <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{ width: "100%" }}>
                    {<CircularProgress style={{color:"white", height:"20px"}} />}
                  </Button>
                  
                ) : (
                  <Button
                    variant="contained"
                    type="submit"
                    color="secondary"
                    style={{ width: "100%" }}
                  >
                    <span style={{color:"white"}}>Log In!</span>
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Typography>
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.loginReducer.isLoading,
    errorMessage: state.loginReducer.errorMessage,
    error:state.loginReducer.error,
    success:state.loginReducer.success,
  };
};

export default connect(mapStateToProps, { loginAction, loginActionFail, loginSucess })(LogIn);

// component={Link}
// to="createcampange"
