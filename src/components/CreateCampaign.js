import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"
import { useStyles } from '../theme/componentStyles/createCampaignStyles'
import campaignFormAction from "../store/actions/campaignFormAction";
import {
    Typography,
    Paper,
    TextField,
    Link,
    Grid,
    Button,
    MenuItem,
    InputAdornment,
    OutlinedInput,
    FormControl,
    InputLabel,
} from "@material-ui/core";


//const useStyles = makeStyles((theme) => ({
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
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 155,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

const CreateCampaign = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const [formState, setFormState] = useState({

        name: '',
        email: '',
        projects: '',
        description: '',
        donation: ''
    })

    const [project, setProject] = useState([])


    const changeHandler = event => {

        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setFormState({ ...formState, [event.target.name]: value })
    }

    const Submit = event => {
        event.preventDefault();
        props.campaignFormAction(formState);
        history.push("/dashboard")
    };

    return (
        <>
            <Grid item style={{ margin: "auto" }}>
                <Grid
                    container
                    alignitems="center"
                    justify="center"
                    style={{ height: "30em" }}
                >
                    <div className={classes.mainImage} />
                </Grid>
            </Grid>
            <div style={{ padding: "15px", margin: "3em auto", maxWidth: "600px" }}>
                <Typography variant="h4" align="center" gutterBottom color="secondary">
                    Create Your Campaign
      </Typography>
                <form className={classes.form} noValidate onSubmit={Submit}>
                    <Paper style={{ padding: "15px" }}>
                        <Grid container alignitems="flex-start" spacing={2}>
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

                            <Grid item xs={6}>

                                <TextField
                                    fullWidth
                                    required
                                    name="projects"
                                    type="select"
                                    select
                                    helperText="Please select your Project Type"
                                    label="Select"

                                    variant="outlined"
                                    onChange={changeHandler}
                                    value={formState.projects}
                                >
                                    <option value='---select item---'>---select item---</option>
                                    <option value="Arts">Arts</option>
                                    <option value="Design">Design</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Food">Food</option>
                                    <option value="Games">Games</option>
                                    <option value="Music">Music</option>
                                </TextField>

                            </Grid>
                            <Grid item xs={6} >
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-amount">
                                        Amount
                                    </InputLabel>
                                    <OutlinedInput
                                        name="donation"
                                        id="outlined-adornment-amount"
                                        label="Donation Goal"
                                        variant="outlined"
                                        value={formState.donation}
                                        onChange={changeHandler}
                                        startAdornment={
                                            <InputAdornment position="start">$</InputAdornment>
                                        }
                                        labelWidth={60}
                                    />
                                </FormControl>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >Create
                    </Button>
                            <Grid container>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            </div>

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        formSubmitted: state.campaignFormReducer.formSubmitted,
    };
};
export default connect(mapStateToProps, { campaignFormAction })(CreateCampaign);