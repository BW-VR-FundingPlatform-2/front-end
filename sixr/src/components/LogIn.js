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
import { useStyles } from '../theme/componentStyles/loginStyles'

//components
import { LogIn_CampaignSuccess } from './LogIn_CampaignSuccess'

//Actions 
import loginAction from "../store/actions/loginAction";
import loginActionFail from '../store/actions/loginActionFail'
import loginSucessAction from '../store/actions/loginSucessAction'
import logOutAction from '../store/actions/logOutAction'
import Axios from "axios";

const LogIn = (props) => {
  //Allows to uses the styling from component styles directory
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    username: "",
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

  const handleSubmit = (event) => {
    event.preventDefault()
    props.loginAction()

    Axios.post("https://vr-funding-platform.herokuapp.com/api/auth/login", formValues)
    .then(res => {
      localStorage.setItem("token",res.data.token);
      history.push("/createcampaign")
      props.loginSucessAction(res.data.token)
      // props.logOutAction()
    })
    .catch((err) => {
      props.loginActionFail()
      setFormValues({
        username: "",
        password: "",
      })
    })
  }


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
      {
        props.success 
        ? <>    
          {/* This will be a private route to our Dashboard  */}
        <LogIn_CampaignSuccess />
      </>
        :
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
                  name="username"
                  type="test"
                  label="User Name"
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
                    to="/signup"
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
      }
      
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

export default connect(mapStateToProps, { loginAction, loginActionFail, loginSucessAction, logOutAction  })(LogIn);

// component={Link}
// to="createcampange"
