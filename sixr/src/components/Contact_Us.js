import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  TextField,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import { contactUsAction } from "../store/actions/contactUsAction";

const Contact_Us = (props) => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    userQuestion: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.contactUsAction(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      {props.isSubmitted ? (
        <>
            <Typography
              variant="h4"
              color="primary"
              style={{ textAlign: "center", margin: "2em auto" }}
            >
              We'll Reach out soon!
            </Typography>

        </>
      ) : (
        <>
          <div
            style={{ padding: "15px", margin: "3em auto", maxWidth: "600px" }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              color="primary"
            >
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Paper style={{ padding: "15px" }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      name="name"
                      type="text"
                      label="Name"
                      variant="outlined"
                      onChange={handleChange}
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      name="userQuestion"
                      type="text area"
                      label="How Can We Help?"
                      variant="outlined"
                      rows={4}
                      multiline
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{ width: "570px" }}

                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isSubmitted: state.contactUsReducer.isSubmitted,
  };
};

export default connect(mapStateToProps, { contactUsAction })(Contact_Us);
