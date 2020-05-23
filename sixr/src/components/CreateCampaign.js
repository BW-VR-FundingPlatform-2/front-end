import React from "react";
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
import { makeStyles } from "@material-ui/styles";
import headerImage from "../assets/campaint_main_image.svg";
//import the action
//make a reducer for the create campaign page

const useStyles = makeStyles((theme) => ({
  mainImage: {
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const projectTypes = [
  {
    value: "arts",
    label: "Arts",
  },
  {
    value: "design",
    label: "Design",
  },
  {
    value: "tech",
    label: "Tech",
  },
  {
    value: "food",
    label: "Food",
  },
  {
    value: "games",
    label: "Games",
  },
  {
    value: "music",
    label: "Music",
  },
];

const CreateCampaign = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item style={{ margin: "auto" }}>
        <Grid
          container
          alignItems="center"
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
        <form>
          <Paper style={{ padding: "15px" }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  name="name"
                  type="text"
                  label="First Name"
                  variant="outlined"
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
                >
                  {projectTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  name="funding"
                  type="text"
                  label="Funding Goal"
                  variant="outlined"
                />
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
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect()(CreateCampaign);
