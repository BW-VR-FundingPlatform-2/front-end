import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as yup from 'yup'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"
import { Link as RouterLink } from "react-router-dom";

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
import { LogInCampaignSuccess } from './LogInCampaignSuccess'

//Actions 
import loginAction from "../store/actions/loginAction";
import loginActionFail from '../store/actions/loginActionFail'
import loginSucessAction from '../store/actions/loginSucessAction'
import logOutAction from '../store/actions/logOutAction'
import Axios from "axios";


// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

const logSchema = yup.object().shape({
    username: yup.string().required("you need to input your name"),
    password: yup
        .string()
        .required("Password is required")

})


const Login = (props) => {
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
                localStorage.setItem("token", res.data.token);
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
                        <LogInCampaignSuccess />
                    </>
                    :
                    <div style={{ padding: "15px", margin: "3em auto", maxWidth: "400px" }}>
                        <Avatar className={classes.avatar} src="/broken-image.jpg" style={{ margin: "2em auto" }}>
                        </Avatar>
                        <form className={classes.form} noValidate onSubmit={Submit}>
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
                                        color="primary"
                                    >
                                        Log In!
                {props.error && <FormHelperText style={{ color: "red" }}>{props.errorMessage}</FormHelperText>}
                                    </Typography>
                                    <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="User Name"
                                        name="username"
                                        type="test"
                                        value={formState.username}
                                        onChange={changeHandler}
                                    />
                                    {errorState.username.length > 0 ? (
                                        <p style={{ color: "red" }}>{errorState.username}</p>
                                    ) : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
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
                                        <p style={{ color: "red" }}>{errorState.password}</p>
                                    ) : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    </Grid>
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

                                        </Grid>
                                        <Grid item >
                                            <Typography style={{margin: '1em'}}>
                                                Don't have an account?
                            <Link color="primary"
                                                    component={RouterLink} to='/register' >
                                                    {" Sign Up"}
                                                </Link>
                                            </Typography>
                                        </Grid>
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
        error: state.loginReducer.error,
        success: state.loginReducer.success,
    };
};

export default connect(mapStateToProps, { loginAction, loginActionFail, loginSucessAction, logOutAction})(Login);

