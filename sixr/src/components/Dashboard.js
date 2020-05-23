import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
const Dashboard = () => {
  return (
    <>
      <Grid container style={{width:"90%", padding:"1em", textAlign:"center"}}>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">Raised: <span style={{color:"black"}}>(data from backend)</span> </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">Raised: <span style={{color:"black"}}>(data from backend)</span> </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">Raised: <span style={{color:"black"}}>(data from backend)</span> </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
