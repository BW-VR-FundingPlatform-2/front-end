import React, { useState } from "react";
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
// import { LogIn_CampaignSuccess } from './LogIn_CampaignSuccess'
// import Login from '../components/Login'

//Actions 
import signUpAction from '../store/actions/signUpAction'
import userAlreadyExistAction from '../store/actions/userAlreadyExistAction'
import Axios from "axios";
import LoginByRyan from './LoginByRyan'

const SignUp = (props) => {
  //Allows to uses the styling from component styles directory
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email:"",
  });
  

  console.log("%c SignUP", "color:red", formValues)

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
    Axios.post("https://vr-funding-platform.herokuapp.com/api/auth/register", formValues)
    .then(res => console.log(res))
    .then(() => {
        props.signUpAction()
        history.push('./loginbyryan')
        setFormValues({
            username: "",
            password: "",
            email:"",
        })
    })
    .catch((err) => {
        console.log("Singup Error", err)
        props.userAlreadyExistAction()
        setFormValues({
            username: "",
            password: "",
            email:"",
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
        props.signUpSuccess
        ? <>      
        <LoginByRyan />
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
                Sign Up!
                {props.userExistError && <FormHelperText style={{color:"red"}}>{props.userExistErrorMessage}</FormHelperText>}
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
                  value={formValues.username}
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
                  value={formValues.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              <Grid item style={{ width: "100%" }}>
                {/* The ternary will change the type of button, a submit or a loading state */}
                {props.signUpLoading ? (
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
                    <span style={{color:"white"}}>Sign Up!</span>
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Typography>
                  Already A member? 
                  <Link
                    color="secondary"
                    component={RouterLink}
                    to="loginbyryan"
                  >
                    {" "}
                    Click Here{" "}
                  </Link>
                  to Log In.
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
    signUpSuccess: state.signUpReducer.signUpSuccess,
    userExistErrorMessage: state.signUpReducer.userExistErrorMessage,
    userExistError: state.signUpReducer.userExistError,
    signUpLoading: state.signUpReducer.signUpLoading,
  };
};

export default connect(mapStateToProps, { signUpAction, userAlreadyExistAction})(SignUp);
