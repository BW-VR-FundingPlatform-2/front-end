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
import { KeyboardDatePicker } from '@material-ui/pickers';

const DashboardForm = () => {
  const [ selectedDate, setSelectedDate ] = useState(new Date())
  
  const [formData, setFormData] = useState({
    pledgeAmount: "",
    discount: "",
    deliveryDate: selectedDate,
    projectDescription: "",
  });

  console.log("%c Dashboard Form Data", "color:cornflowerblue", formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div style={{ padding: "15px", margin: "3em auto", maxWidth: "90%" }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Create Your Rewards
        </Typography>
        <form>
          <Paper style={{ padding: "15px", width: "80%", margin: "auto" }}>
            <Grid container alignItems="flex-start" spacing={3}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  name="pledgeAmount"
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
                  name="discount"
                  type="text"
                  label="Discount Amount"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.discount}
                />
              </Grid>
              <Grid item xs={4}>
                {/* <TextField
                  fullWidth
                  required
                  name="deliveryDate"
                  type="text"
                  label="Delivery Date"
                  variant="outlined"
                  onChange={handleChange}
                  value={formData.deliveryDate}
                /> */}
                <KeyboardDatePicker
                  margin="dense"
                  name="deliveryDate"
                  id="date-picker-dialog"
                  label="Delivery Date"
                  format="MM/dd/yyyy"
                  value={formData.deliveryDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="projectDescription"
                  type="text area"
                  label="Project Description"
                  variant="outlined"
                  rows={12}
                  multiline
                  onChange={handleChange}
                  value={formData.projectDescription}
                />
              </Grid>
              <Grid item style={{ marginTop: 8 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{ width: "150px", color: "white" }}
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
