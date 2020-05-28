import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom"
import * as yup from 'yup'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"

//components
import { LogIn_CampaignSuccess } from './LogIn_CampaignSuccess'

//Actions 
import loginAction from "../store/actions/loginAction";
import loginActionFail from '../store/actions/loginActionFail'
import loginSucessAction from '../store/actions/loginSucessAction'
import logOutAction from '../store/actions/logOutAction'
import Axios from "axios";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const logSchema = yup.object().shape({
    username: yup.string().required("you need to input your name"),
    password: yup
        .string()
        .required("Password is required")
        
})


const LogIn = (props) => {
    const classes = useStyles();

    const [formState, setFormState] = useState({
        username: '',
        password: '',
        rememberMe: false
    })

    const [remember, setRemember] = useState(false)

    const history = useHistory();

    const [errorState, setErrorState] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        logSchema.isValid(formState).then(valid => {
            setDisabled(!valid);
        })
    }, [formState]);

    const validate = event => {

        const value =
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
        yup
            .reach(logSchema, event.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: err.errors[0]
                });
            });
    }

    const changeHandler = event => {
        event.persist();
        validate(event);
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setFormState({ ...formState, [event.target.name]: value })
    }

    const Submit = event => {
        event.preventDefault()
        props.loginAction()

        Axios.post("https://vr-funding-platform.herokuapp.com/api/auth/login", formState)
        .then(res => {
          localStorage.setItem("token",res.data.token);
          history.push("/")
          props.loginSucessAction()
          props.logOutAction()
        })
        .catch((err) => {
          props.loginActionFail()
          setFormState({
            username: "",
            password: "",
          })
        })
      }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} src="/broken-image.jpg">
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
        </Typography>
                <form className={classes.form} noValidate onSubmit={Submit}>
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
                        color="primary"
                        disabled={disabled}
                        className={classes.submit}
                    >
                        Login
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/Register' variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
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
  
