import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
import { Paper, FormHelperText } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

//components
// import LogInCampaignSuccess from "./LogInCampaignSuccess";

//Actions
import loginAction from "../store/actions/loginAction";
import loginActionFail from "../store/actions/loginActionFail";
import loginSucessAction from "../store/actions/loginSucessAction";
import logOutAction from "../store/actions/logOutAction";
import Axios from "axios";

//styles
import { useStyles } from "../theme/componentStyles/loginStyles";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const logSchema = yup.object().shape({
  username: yup.string().required("you need to input your name"),
  password: yup.string().required("Password is required"),
});

const LoginByRyan = (props) => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

//   const [remember, setRemember] = useState(false);

  const history = useHistory();

  const [errorState, setErrorState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    logSchema.isValid(formState).then((valid) => {
      setDisabled(!valid);
    });
  }, [formState]);

  const validate = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    yup
      .reach(logSchema, event.target.name)
      .validate(value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0],
        });
      });
  };

  const changeHandler = (event) => {
    event.persist();
    validate(event);
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormState({ ...formState, [event.target.name]: value });
  };

  const Submit = (event) => {
    event.preventDefault();
    props.loginAction();

    Axios.post(
      "https://vr-funding-platform.herokuapp.com/api/auth/login",
      formState
    )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.loginSucessAction(res.data.token);
        history.push("/createcampaignbyryan");

      })
      .catch((err) => {
        props.loginActionFail();
        setFormState({
          username: "",
          password: "",
        });
      });
  };

  return (
    <>
      <Grid item>
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Avatar
            className={classes.avatar}
            style={{ margin: " 2em auto" }}
            src="/broken-image.jpg"
          ></Avatar>

          <Paper>
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
            <form
              noValidate
              onSubmit={Submit}
              style={{ width: "90%", margin: "1em auto" }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                value={formState.username}
                onChange={changeHandler}
              />
              {errorState.username.length > 0 ? (
                <p className="errors">{errorState.username}</p>
              ) : null}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={formState.password}
                onChange={changeHandler}
              />
              {errorState.password.length > 0 ? (
                <p className="errors">{errorState.password}</p>
              ) : null}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                disabled={disabled}
                style={{ marginBottom: "1em" }}
                // className={classes.submit}
              >
                <span style={{ color: "white" }}>Log In</span>
              </Button>
              <Grid container>
                {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
                <Grid item style={{ marginBottom: "1em" }}>
                  <Typography>
                    {"Don't have an account? "}
                    <Link to="/signup" variant="body2">
                      {"Sign Up"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Grid>
          </Paper>
          
        </div>
        <Box mt={8}></Box>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loginReducer.isLoading,
    errorMessage: state.loginReducer.errorMessage,
    error: state.loginReducer.error,
    success: state.loginReducer.success,
  };
};

export default connect(mapStateToProps, {
  loginAction,
  loginActionFail,
  loginSucessAction,
  logOutAction,
})(LoginByRyan);
