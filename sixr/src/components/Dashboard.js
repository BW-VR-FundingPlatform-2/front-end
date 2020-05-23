import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import laurenChil from "../assets/Lauren_chil.svg";
import { makeStyles } from "@material-ui/styles";

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
      color:"black",
      fontSize:"2em",
      fontWeight:"bold"
  },
  fundingGoal: {
    color:"#FEBF12",
    fontSize:"1em",
    fontWeight:"bold"
  },
  description : {
    width: "90%",
    margin:"1em auto 3em 1em"
  },
  buttonStyle : {
      marginLeft:"1em",
      width: "100px", 
      color: "white",
  }

}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        style={{ width: "90%", padding: "1em", textAlign: "center" }}
      >
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Raised: <span style={{ color: "black" }}>(data from backend)</span>{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Raised: <span style={{ color: "black" }}>(data from backend)</span>{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Raised: <span style={{ color: "black" }}>(data from backend)</span>{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ margin: " 1em 0 2em 2em" }}  direction="row">
        <Grid
          item
          xs={4}
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          <div className={classes.mainImage} />
        </Grid>
          <Grid item xs={8} >
            <Typography style={{marginLeft:".5em"}} className={classes.headerContent}>Project Title</Typography>
            <Typography style={{marginLeft:"1em"}} className={classes.fundingGoal}>Funding Goal: <span style={{color:"black"}}>$300,000</span></Typography>
            <Typography
                className={classes.description}
            >Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.buttonStyle}
              alignItems="flex-end"
            >
              edit
            </Button>
          </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
