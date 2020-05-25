import React, { useState, useEffect } from "react";
//connect from Redux
import { connect } from "react-redux";
import { Grid, Button, Typography, TextField, Paper } from "@material-ui/core";
import laurenChil from "../assets/Lauren_chil.svg";
import { makeStyles } from "@material-ui/styles";
//components
import DashboardForm from "./DashboardForm";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    backgroundImage: `url(${laurenChil})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  headerContent: {
    color: "black",
    fontSize: "2em",
    fontWeight: "bold",
  },
  fundingGoal: {
    color: "#FEBF12",
    fontSize: "1em",
    fontWeight: "bold",
  },
  description: {
    width: "90%",
    margin: "1em auto 3em 1em",
  },
  buttonStyle: {
    marginLeft: "1em",
    width: "100px",
    color: "white",
  },
}));

const Dashboard = (props) => {
  const [counter, setCounter] = useState({
    count: 0,
  });
  const [imageLoader, setImageLoader] = useState(false);
  const [projectTitleForm, setProjectTitleForm] = useState({
    title: "",
    editTitle: false,
  });

  const classes = useStyles();

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((preveState) => {
        return {
          ...preveState,
          count: count + 123,
        };
      });
    }, 1000);
    return () => clearInterval(count);
  });

  return (
    <>
      <Grid
        container
        style={{ width: "90%", padding: "1em", textAlign: "center" }}
      >
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Raised: <span style={{ color: "black" }}>${counter.count}</span>{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Project Type:{" "}
            <span style={{ color: "black" }}>
              {props.projectType.toUpperCase()}
            </span>{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Funding Goal:{" "}
            <span style={{ color: "black" }}>${props.fundingGoal}</span>{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ margin: " 1em 0 2em 2em" }} direction="row">
        <Grid
          item
          xs={4}
          container
          alignitems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          {imageLoader ? (
            <div className={classes.mainImage} />
          ) : (
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.buttonStyle}
              alignitems="flex-end"
              style={{ marginTop: "1em", height: "35px", width: "150px" }}
              onClick={() => setImageLoader(true)}
            >
              Add Photo
            </Button>
          )}
        </Grid>
        <Grid item xs={8}>
          {projectTitleForm.editTitle ? null : (
            <>
              <form>
                <Grid container alignitems="flex-start" spacing={2}>
                  <Grid item xs={5}>
                    <TextField
                      fullWidth
                      required
                      name="title"
                      type="text"
                      label="Project Title"
                      variant="outlined"
                      style={{ marginLeft: "1em" }}
                      // onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </form>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.buttonStyle}
                alignitems="flex-end"
                style={{ marginTop: "1em", height: "35px", width: "150px" }}
                onClick={() => setImageLoader(true)}
              >
                Submit Title
              </Button>
            </>
          )}

          {projectTitleForm.editTitle
            ? null
            : 
              <Typography
                style={{ marginLeft: ".5em", marginBottom:"1em" }}
                className={classes.headerContent}
              >
                {projectTitleForm.title}
              </Typography>
          }

          <Typography
            style={{ marginLeft: "1em" }}
            className={classes.fundingGoal}
          >
            Funding Goal:{" "}
            <span style={{ color: "black" }}>{props.fundingGoal}</span>
          </Typography>
          <Typography className={classes.description}>
            Description is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. Description is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries. Description
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries. Description is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </Typography>
          {!projectTitleForm.editTitle ? null : (
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.buttonStyle}
              alignitems="flex-end"
              style={{ marginTop: "1em", height: "35px", width: "150px" }}
              onClick={() => setImageLoader(true)}
            >
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
      <DashboardForm />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.campaignFormReducer.name,
    email: state.campaignFormReducer.email,
    description: state.campaignFormReducer.description,
    projectType: state.campaignFormReducer.projectType,
    fundingGoal: state.campaignFormReducer.fundingGoal,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
