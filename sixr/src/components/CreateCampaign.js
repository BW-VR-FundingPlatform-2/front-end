import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'


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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 155,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

export default function CreateCampaign() {
    const classes = useStyles();

    const [formState, setFormState] = useState({

        name: '',
        email: '',
        projects: '',
        description: '',
        donation:''
    })

    const [project, setProject] = useState([])


    const changeHandler = event => {

        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setFormState({ ...formState, [event.target.name]: value })
    }

    const Submit = event => {
        event.preventDefault()

        axios.post('https://reqres.in/api/users', formState)
        .then(res => console.log(res))

        setFormState({
            name: '',
            email: '',
            projects: '',
            description: '',
            donation: ''
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create Campaign
        </Typography>
                <form className={classes.form} noValidate onSubmit={Submit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            name="name"
                            type="text"
                            label="First Name"
                            variant="outlined"
                            value={formState.name}
                            onChange={changeHandler}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            name="email"
                            type="text"
                            label="Email"
                            variant="outlined"
                            value={formState.email}
                            onChange={changeHandler}
                        />
                    </Grid>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} >
                        <TextField
                            fullWidth
                            required
                            name="description"
                            type="text area"
                            label="Project Description"
                            variant="outlined"
                            rows={4}
                            multiline
                            value={formState.description}
                            onChange={changeHandler}
                        />
                    </Grid>
                    <br></br>
                    <Grid container spacing={2}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="campaign-project">---select project---</InputLabel>
                        <Select
                            labelID="campaign-project"
                            value={formState.projects}
                            name="projects"
                            id="projects"
                            onChange={changeHandler}
                        >
                            <option value='---select item---'>---select item---</option>
                            <option value="Arts">Arts</option>
                            <option value="Design">Design</option>
                            <option value="Tech">Tech</option>
                            <option value="Food">Food</option>
                            <option value="Games">Games</option>
                            <option value="Music">Music</option>
                        </Select>
                        
                    </FormControl>
                    <Grid item xs={7} >
                        <TextField
                            fullWidth
                            required
                            name="donation"
                            label="Donation Goal"
                            variant="outlined"
                            multiline
                            value={formState.donation}
                            onChange={changeHandler}
                        />
                    </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Create
                    </Button>
                    <Grid container>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}