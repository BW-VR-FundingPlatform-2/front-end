import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { Link } from "react-router-dom"
import * as yup from 'yup'


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//yup schema
const regSchema = yup.object().shape({
  username: yup.string().required("you need to input your user name"),
  password: yup
  .string()
  .required("Password is required"),
  email: yup
    .string()
    .email("E-mail is not valid")
    .required("E-mail is required")
})

export default function Register() {
  const classes = useStyles();
  //initial state of the form
  const [formState, setFormState] = useState({
    id: '',
    username: '',
    password: '',
    email: ''
  })

  //initial state for errors
  const [errorState, setErrorState] = useState({
    username: "",
    password: "",
    email: ""
  });
  //setting a disabled state for our submit button
  const [disabled, setDisabled] = useState(true)

  //setting the state for users for our api call
  const [users, setUsers] = useState([])

  //checking if our state is valid or not. if it is enabled the button if not keep it disabled.
  useEffect(() => {
    regSchema.isValid(formState).then(valid => {
      setDisabled(!valid);
    })
  }, [formState]);

  //function to see if each element in the form is valid
  const validate = event => {

    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    yup
      .reach(regSchema, event.target.name)
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


  //changing the state from our input
  const changeHandler = event => {
    event.persist();
    validate(event);

    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  //what the form should do on submit
  const Submit = event => {
    event.preventDefault()

    axios.post('https://vr-funding-platform.herokuapp.com/api/auth/register', formState)
      .then(res => {
        setUsers([...users, res.data])
        console.log(res.data)
      })


    setFormState({
      id: '',
      username: '',
      password: '',
      email: ''
    });
  }




  //returns the form
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src="/broken-image.jpg">
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={Submit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                label="User Name"
                autoFocus
                value={formState.username}
                onChange={changeHandler}
              />
              {errorState.username.length > 0 ? (
                <p className="errors">{errorState.username}</p>
              ) : null}
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formState.email}
                onChange={changeHandler}
              />
              {errorState.email.length > 0 ? (
                <p className="errors">{errorState.email}</p>
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
                <p className="errors">{errorState.password}</p>
              ) : null}
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            disabled={disabled}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/login' variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}