import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Typography,
  Paper,
  TextField,
  Link,
  Grid,
  Button,
  MenuItem,
} from "@material-ui/core";



const DashboardForm = () => {
    const [ formData, setFormData ] = useState({
        amount:"",
        projectType:"",
        deliveryDate:"",
        description:"",
    })

    const handleChange = (event) => {
        const { name , value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    console.log("formData", formData)
  return (
    <>
      <div style={{ padding: "15px", margin: "3em auto", maxWidth: "90%" }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Create Your Rewards
        </Typography>
        <form>
          <Paper style={{ padding: "15px", width:"80%", margin:"auto"}}>
            <Grid container alignItems="flex-start" spacing={3}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  name="amount"
                  type="text"
                  label="Pledge Amount"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.amount}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  name="projectType"
                  type="text"
                  label="Project Type"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.projectType}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  name="deliveryDate"
                  type="text"
                  label="Delivery Date"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.deliveryDate}
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
                  rows={12}
                  multiline
                  onChange={handleChange}
                  value={formData.description}
                />
              </Grid>
              <Grid item style={{ marginTop: 8 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{ width: "150px", color:"white" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
    </>
  );
};

export default DashboardForm;
