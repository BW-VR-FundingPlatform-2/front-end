import React, { useState } from "react";
// For connecting store to compotnent for redux
import { connect } from "react-redux";
import Axios from 'axios'
//Renaming link from react router in order to use it with this component.
import { Link as routerLink } from 'react-router-dom'
import { useHistory } from "react-router-dom"
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
import { useStyles } from '../theme/componentStyles/createCampaignStyles'
// components
import {LogIn_CampaignSuccess} from './LogIn_CampaignSuccess'

//Select form values
import { projectTypes } from "../utils/selectFormValues";
//import the action
//make a reducer for the create campaign page



const CreateCampaign = (props) => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    description: "",
    projectType: "",
    fundingGoal: "",
  });

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
    event.preventDefault();
    props.campaignFormAction(formValues);
    history.push("/dashboard")
  };

  const classes = useStyles();
  return (
    <>
      {props.formSubmitted 
      ?        
      <>
      < LogIn_CampaignSuccess />

  </>
      :
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
      <form onSubmit={handleSubmit}>
        <Paper style={{ padding: "15px" }}>
          <Grid container alignitems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="name"
                type="text"
                label="Name"
                variant="outlined"
                onChange={handleChange}
                value={formValues.name}
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
                onChange={handleChange}
                value={formValues.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="description"
                type="text area"
                label="Project Description"
                variant="outlined"
                rows={4}
                multiline
                onChange={handleChange}
                value={formValues.description}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="projectType"
                type="select"
                select
                label="Select"
                helperText="Please select your Project Type"
                variant="outlined"
                onChange={handleChange}
                value={formValues.projectType}
              >
                {projectTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  name="fundingGoal"
                  id="outlined-adornment-amount"
                  value={formValues.fundingGoal}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                style={{ width: "150px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
    </>
    }
      
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    formSubmitted:state.campaignFormReducer.formSubmitted,
  };
};
export default connect(mapStateToProps, { campaignFormAction })(CreateCampaign);
